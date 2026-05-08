-- Migration: Fix leaderboard sorting for in-progress users
-- Problem: Users who are in-progress (time_sec = null) are all sorted equally by username,
--          not by their actual elapsed time since journey_started_at
-- Solution: Calculate elapsed time in the view for in-progress users and use it for sorting

begin;

-- Drop existing view
drop view if exists public.v_global_ranks_ordered;

-- Recreate view with calculated elapsed time for sorting
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
  -- - If time_sec is not null (journey completed), use time_sec
  -- - If time_sec is null but journey_started_at exists (in progress), calculate elapsed time
  -- - Otherwise use a very large number (2147483647) to sort to bottom
  case
    when le.time_sec is not null then le.time_sec
    when le.journey_started_at is not null and le.journey_completed_at is null then
      -- Calculate elapsed time in seconds for in-progress users
      extract(epoch from (now() - le.journey_started_at))::integer
    else 2147483647
  end as effective_time_sec
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
order by
  rank_stage_num desc,
  effective_time_sec asc,
  p.username asc;

commit;

