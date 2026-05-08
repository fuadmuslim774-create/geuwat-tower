-- Debug: Why is user at rank 13?
-- Run this query and share the results

-- Query 1: Check top 15 users in leaderboard with all details
select 
  row_number() over (order by 
    case when le.journey_started_at is not null then 1 else 2 end asc,
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
    end desc,
    case
      when le.time_sec is not null then le.time_sec
      when le.journey_started_at is not null and le.journey_completed_at is null then
        extract(epoch from (now() - le.journey_started_at))::integer
      else 2147483647
    end asc,
    p.username asc
  ) as rank,
  p.username,
  le.rank_stage_id,
  le.time_sec,
  le.journey_started_at,
  le.journey_completed_at,
  case when le.journey_started_at is not null then 'ACTIVE' else 'INACTIVE' end as status,
  case
    when le.time_sec is not null then le.time_sec
    when le.journey_started_at is not null and le.journey_completed_at is null then
      extract(epoch from (now() - le.journey_started_at))::integer
    else 2147483647
  end as effective_time_sec
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
order by rank
limit 15;

-- Query 2: Check if your account has journey_started_at
-- Replace 'YOUR_USERNAME' with your actual username
select 
  p.username,
  p.id as user_id,
  le.rank_stage_id,
  le.time_sec,
  le.journey_started_at,
  le.journey_completed_at,
  case when le.journey_started_at is not null then 'HAS journey_started_at' else 'NO journey_started_at' end as status
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
where p.username not like 'LEARNER_%'  -- Show only real users
order by p.username;

-- Query 3: Count active vs inactive users
select 
  case when le.journey_started_at is not null then 'ACTIVE' else 'INACTIVE' end as status,
  count(*) as count
from public.profiles p
left join public.leaderboard_entries le on le.user_id = p.id
group by status;
