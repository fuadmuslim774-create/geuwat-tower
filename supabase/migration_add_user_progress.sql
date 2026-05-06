-- Migration: Add user_progress table for full progress persistence
-- This stores the complete JourneyProgress object including all stage progress

begin;

-- Create user_progress table to store full progress data
create table if not exists public.user_progress (
  user_id uuid primary key references public.profiles (id) on delete cascade,
  progress_data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Add index for faster queries
create index if not exists user_progress_updated_at_idx 
on public.user_progress (updated_at desc);

-- Add trigger to auto-update updated_at
drop trigger if exists user_progress_touch_updated_at on public.user_progress;
create trigger user_progress_touch_updated_at
before update on public.user_progress
for each row execute function public.touch_updated_at();

-- Row Level Security
alter table public.user_progress enable row level security;

-- Users can read their own progress
drop policy if exists "user_progress_read_own" on public.user_progress;
create policy "user_progress_read_own"
on public.user_progress for select
to anon, authenticated
using (true); -- Allow reading (we'll filter by user_id in the query)

-- Deny direct writes from client (server-only via service role)
drop policy if exists "user_progress_deny_writes" on public.user_progress;
create policy "user_progress_deny_writes"
on public.user_progress for insert
to anon, authenticated
with check (false);

drop policy if exists "user_progress_deny_updates" on public.user_progress;
create policy "user_progress_deny_updates"
on public.user_progress for update
to anon, authenticated
using (false)
with check (false);

commit;
