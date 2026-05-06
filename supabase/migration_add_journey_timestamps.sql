-- Migration: Add journey timestamps to leaderboard_entries
-- This fixes the issue where completion timer resets on re-login
-- by persisting journey_started_at and journey_completed_at in the database

begin;

-- Add journey timestamp columns to leaderboard_entries
alter table public.leaderboard_entries
add column if not exists journey_started_at timestamptz null,
add column if not exists journey_completed_at timestamptz null;

-- Add indexes for better query performance
create index if not exists leaderboard_entries_journey_started_at_idx 
on public.leaderboard_entries (journey_started_at);

create index if not exists leaderboard_entries_journey_completed_at_idx 
on public.leaderboard_entries (journey_completed_at);

-- Update the v_global_ranks view to include journey timestamps
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
  le.journey_started_at,
  le.journey_completed_at,
  le.updated_at
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id;

-- Update the v_global_ranks_ordered view to include journey timestamps
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
  le.journey_started_at,
  le.journey_completed_at,
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

commit;
