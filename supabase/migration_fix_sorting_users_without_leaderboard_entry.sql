-- Migration: Fix sorting for users without leaderboard entry
-- Problem: Users who haven't started (no leaderboard_entries row) appear in middle of rankings
-- Solution: Sort users without leaderboard entry to the very bottom

begin;

-- Drop existing view
drop view if exists public.v_global_ranks_ordered;

-- Recreate view with improved sorting logic
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
  end as rank_stage_num,
  -- Calculate effective time for sorting:
  -- Priority 1: Users with completed journey (time_sec not null)
  -- Priority 2: Users in progress (journey_started_at not null, journey_completed_at null)
  -- Priority 3: Users who haven't started (no leaderboard entry or no journey_started_at)
  case
    when le.time_sec is not null then 
      -- Completed: use actual time_sec (0 to ~millions)
      le.time_sec
    when le.journey_started_at is not null and le.journey_completed_at is null then
      -- In progress: calculate elapsed time (will be current elapsed time)
      extract(epoch from (now() - le.journey_started_at))::integer
    when le.user_id is null then
      -- No leaderboard entry at all: sort to very bottom (use max int + 2)
      2147483647
    else
      -- Has leaderboard entry but no journey_started_at: sort to very bottom (use max int + 1)
      2147483646
  end as effective_time_sec
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
order by
  rank_stage_num desc,
  effective_time_sec asc,
  p.username asc;

commit;

-- Verify: Check that users without leaderboard entry are at bottom
-- select username, rank_stage_id, journey_started_at, 
--        case
--          when le.time_sec is not null then le.time_sec
--          when le.journey_started_at is not null then extract(epoch from (now() - le.journey_started_at))::integer
--          when le.user_id is null then 2147483647
--          else 2147483646
--        end as effective_time
-- from public.profiles p
-- left join public.leaderboard_entries le on le.user_id = p.id
-- order by effective_time asc
-- limit 20;
