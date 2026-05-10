-- Migration: Prioritize active users (with journey_started_at) in leaderboard
-- Problem: Users who haven't started journey appear above active users
-- Solution: Add priority tier - active users always rank above inactive users

begin;

-- Drop existing view
drop view if exists public.v_global_ranks_ordered;

-- Recreate view with priority tier for active vs inactive users
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
  case
    when le.time_sec is not null then 
      -- Completed: use actual time_sec
      le.time_sec
    when le.journey_started_at is not null and le.journey_completed_at is null then
      -- In progress: calculate elapsed time
      extract(epoch from (now() - le.journey_started_at))::integer
    else
      -- Not started: use very large number
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

-- Verify: Check that active users appear before inactive users
-- select username, 
--        case when journey_started_at is not null then 'ACTIVE' else 'INACTIVE' end as status,
--        rank_stage_id, 
--        journey_started_at
-- from public.v_global_ranks_ordered
-- limit 20;
