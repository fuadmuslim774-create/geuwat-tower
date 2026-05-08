-- Debug: Check leaderboard data to understand the sorting issue
-- Run this to see what data exists for seed users vs real users

-- Check top 20 users in current leaderboard
select 
  p.username,
  le.rank_stage_id,
  le.time_sec,
  le.journey_started_at,
  le.journey_completed_at,
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
  case
    when le.time_sec is not null then le.time_sec
    when le.journey_started_at is not null and le.journey_completed_at is null then
      extract(epoch from (now() - le.journey_started_at))::integer
    when le.user_id is null then 2147483647
    else 2147483646
  end as effective_time_sec
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
order by
  rank_stage_num desc,
  effective_time_sec asc,
  p.username asc
limit 20;

-- Check if seed users have leaderboard entries
select 
  count(*) as total_seed_users,
  count(le.user_id) as seed_users_with_leaderboard_entry
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
where p.username like 'LEARNER_%';

-- Check real users (non-seed)
select 
  p.username,
  le.rank_stage_id,
  le.time_sec,
  le.journey_started_at,
  le.journey_completed_at
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
where p.username not like 'LEARNER_%'
order by p.username;
