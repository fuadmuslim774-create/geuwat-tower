-- GEUWAT TOWER - Supabase (Postgres) schema
-- Paste into Supabase SQL Editor.
-- Notes (NO Supabase Auth):
-- - This schema does NOT use `auth.users`.
-- - Email/password are stored in a dedicated table: `public.auth_email_password`.
-- - Game identity is `public.accounts` (UUID). Other auth methods can attach to the same account later.
-- - `public.profiles` holds game-facing profile fields (username, avatar, batch/cohort).
-- - `public.leaderboard_entries` holds best/most-recent run summary used for global ranks.
-- - Generation ranks filter by `profiles.batch_id`.

begin;

-- Enable extensions commonly available on Supabase.
create extension if not exists pgcrypto;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ===== Enums (keeps values aligned with the app) =====
do $$
begin
  if not exists (select 1 from pg_type where typname = 'stage_id') then
    create type public.stage_id as enum (
      'alphabet',
      'lax_vowel',
      'tense_vowel',
      'diphthong',
      'voiceless',
      'voiced',
      'final_s_es',
      'final_d_ed',
      'royal_king'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'avatar_id') then
    create type public.avatar_id as enum ('chibi1', 'chibi2', 'chibi3', 'chibi4');
  end if;
end $$;

-- ===== Cohorts / Generations =====
create table if not exists public.batches (
  id text primary key,
  title text not null,
  created_at timestamptz not null default now()
);

insert into public.batches (id, title)
values ('gen_1', '1ST GENERATION')
on conflict (id) do nothing;

-- ===== Accounts (custom auth; NOT Supabase Auth) =====
create table if not exists public.accounts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists accounts_touch_updated_at on public.accounts;
create trigger accounts_touch_updated_at
before update on public.accounts
for each row execute function public.touch_updated_at();

-- ===== Auth: Email/Password (dedicated table) =====
create table if not exists public.auth_email_password (
  account_id uuid primary key references public.accounts (id) on delete cascade,
  email text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint auth_email_basic check (position('@' in email) > 1)
);

create index if not exists auth_email_password_email_idx on public.auth_email_password (email);

drop trigger if exists auth_email_password_touch_updated_at on public.auth_email_password;
create trigger auth_email_password_touch_updated_at
before update on public.auth_email_password
for each row execute function public.touch_updated_at();

-- Helper to create an account + email/password credential (bcrypt hash via pgcrypto `crypt()`).
-- Use from server-side only (Service Role recommended).
create or replace function public.create_account_with_email_password(p_email text, p_password text)
returns uuid
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  new_id uuid;
begin
  insert into public.accounts default values returning id into new_id;

  insert into public.auth_email_password (account_id, email, password_hash)
  values (new_id, lower(trim(p_email)), extensions.crypt(p_password, extensions.gen_salt('bf')));

  return new_id;
end;
$$;

-- Lock down SECURITY DEFINER RPC so it cannot be called via anon/authenticated REST RPC.
revoke all on function public.create_account_with_email_password(text, text) from public;
revoke all on function public.create_account_with_email_password(text, text) from anon;
revoke all on function public.create_account_with_email_password(text, text) from authenticated;
-- Allow server-only role (Supabase service key):
grant execute on function public.create_account_with_email_password(text, text) to service_role;

-- Verify a plaintext password against a stored bcrypt hash.
-- Used by the Next.js server route `/api/login`.
create or replace function public.verify_password(p_password text, p_hash text)
returns boolean
language sql
security definer
set search_path = public, extensions
as $$
  select extensions.crypt(p_password, p_hash) = p_hash;
$$;

revoke all on function public.verify_password(text, text) from public;
revoke all on function public.verify_password(text, text) from anon;
revoke all on function public.verify_password(text, text) from authenticated;
grant execute on function public.verify_password(text, text) to service_role;

-- ===== Profiles =====
create table if not exists public.profiles (
  id uuid primary key references public.accounts (id) on delete cascade,
  username text not null,
  username_changed boolean not null default false,
  avatar_id public.avatar_id not null default 'chibi1',
  batch_id text null references public.batches (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint username_len check (char_length(username) between 3 and 20)
);

create index if not exists profiles_batch_id_idx on public.profiles (batch_id);

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
before update on public.profiles
for each row execute function public.touch_updated_at();

-- If you want auto-provisioning, create the profile row right after
-- `create_account_with_email_password()` in your server code (recommended).

-- ===== Leaderboard =====
create table if not exists public.leaderboard_entries (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  rank_stage_id public.stage_id not null,
  time_sec integer null,
  updated_at timestamptz not null default now(),

  constraint time_sec_nonneg check (time_sec is null or time_sec >= 0)
);

create index if not exists leaderboard_entries_rank_idx on public.leaderboard_entries (rank_stage_id);
create index if not exists leaderboard_entries_updated_at_idx on public.leaderboard_entries (updated_at desc);

-- Helpful view for reading global ranks (join profile fields + leaderboard).
drop view if exists public.v_global_ranks;
create view public.v_global_ranks
with (security_invoker = true)
as
select
  p.id as user_id,
  p.username,
  p.avatar_id,
  p.batch_id,
  le.rank_stage_id,
  le.time_sec,
  le.updated_at
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id;

-- Ordered view for pagination: stage rank desc, then time asc, then username.
drop view if exists public.v_global_ranks_ordered;
create view public.v_global_ranks_ordered
with (security_invoker = true)
as
select
  p.id as user_id,
  p.username,
  p.avatar_id,
  p.batch_id,
  le.rank_stage_id,
  le.time_sec,
  le.updated_at,
  case le.rank_stage_id
    when 'alphabet' then 1
    when 'lax_vowel' then 2
    when 'tense_vowel' then 3
    when 'diphthong' then 4
    when 'voiceless' then 5
    when 'voiced' then 6
    when 'final_s_es' then 7
    when 'final_d_ed' then 8
    when 'royal_king' then 9
    else 0
  end as rank_stage_num
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
order by
  rank_stage_num desc,
  coalesce(le.time_sec, 2147483647) asc,
  p.username asc;

-- ===== Row Level Security =====
alter table public.batches enable row level security;
alter table public.accounts enable row level security;
alter table public.auth_email_password enable row level security;
alter table public.profiles enable row level security;
alter table public.leaderboard_entries enable row level security;

-- Batches: readable by everyone (or restrict to authenticated if desired).
drop policy if exists "batches_read_all" on public.batches;
create policy "batches_read_all"
on public.batches for select
to anon, authenticated
using (true);

-- IMPORTANT ABOUT RLS WITHOUT Supabase Auth:
-- - Without Supabase Auth, Postgres cannot know "who is logged in" (no `auth.uid()`).
-- - The simplest safe approach is: deny all client direct writes, and only write via
--   server using the Supabase Service Role key (bypasses RLS).
-- - Reads can remain public if you want leaderboards visible.

-- Accounts: deny direct access from client roles.
drop policy if exists "accounts_deny_all" on public.accounts;
create policy "accounts_deny_all"
on public.accounts
for all
to anon, authenticated
using (false)
with check (false);

-- Email/password auth table: deny direct access from client roles.
drop policy if exists "auth_email_password_deny_all" on public.auth_email_password;
create policy "auth_email_password_deny_all"
on public.auth_email_password
for all
to anon, authenticated
using (false)
with check (false);

-- Profiles:
-- - Everyone can read profiles (for ranks/leaderboards).
-- - Deny direct inserts/updates from client roles (server-only writes).
drop policy if exists "profiles_read_all" on public.profiles;
create policy "profiles_read_all"
on public.profiles for select
to anon, authenticated
using (true);

drop policy if exists "profiles_deny_writes" on public.profiles;
create policy "profiles_deny_writes"
on public.profiles for insert
to anon, authenticated
with check (false);

drop policy if exists "profiles_deny_updates" on public.profiles;
create policy "profiles_deny_updates"
on public.profiles for update
to anon, authenticated
using (false)
with check (false);

-- Leaderboard entries:
-- - Everyone can read leaderboard rows.
-- - Deny direct inserts/updates from client roles (server-only writes).
drop policy if exists "leaderboard_read_all" on public.leaderboard_entries;
create policy "leaderboard_read_all"
on public.leaderboard_entries for select
to anon, authenticated
using (true);

drop policy if exists "leaderboard_deny_inserts" on public.leaderboard_entries;
create policy "leaderboard_deny_inserts"
on public.leaderboard_entries for insert
to anon, authenticated
with check (false);

drop policy if exists "leaderboard_deny_updates" on public.leaderboard_entries;
create policy "leaderboard_deny_updates"
on public.leaderboard_entries for update
to anon, authenticated
using (false)
with check (false);

commit;
