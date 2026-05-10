-- Migration: Update v_global_ranks_ordered view to use sum of best times
-- This script updates the view to remove elapsed time calculation for in-progress users
-- and use time_sec directly (which now stores sum of best stage times).
--
-- IMPORTANT: Run this migration AFTER running migration_recalculate_completion_times.sql

begin;

-- Drop existing view
drop view if exists public.v_global_ranks_ordered;

-- Recreate view with updated effective_time_sec calculation
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
  -- Priority tier: Active users (with journey_started_at) rank above inactive users
  case
    when le.journey_started_at is not null then 1  -- Active users (tier 1)
    else 2  -- Inactive users (tier 2)
  end as priority_tier,
  -- Calculate effective time for sorting within same tier
  -- CHANGED: Removed elapsed time calculation for in-progress users
  -- Now uses time_sec directly (sum of best times for completed stages)
  case
    when le.time_sec is not null then 
      -- Use actual time_sec (sum of best times for completed stages)
      le.time_sec
    else
      -- Not started or no time recorded: use very large number
      2147483647
  end as effective_time_sec
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
order by
  priority_tier asc,           -- Active users (tier 1) first, inactive users (tier 2) last
  rank_stage_num desc,          -- Within same tier, higher stage first
  effective_time_sec asc,       -- Within same stage, faster time first
  p.username asc;               -- Within same time, alphabetical

commit;
