-- Cleanup: Remove seed users from leaderboard
-- This removes leaderboard entries for LEARNER_001 to LEARNER_150
-- but keeps their profiles (so they can still login if needed)

begin;

-- Delete leaderboard entries for seed users (LEARNER_001 to LEARNER_150)
delete from public.leaderboard_entries
where user_id in (
  select id from public.profiles
  where username like 'LEARNER_%'
);

commit;

-- Verify: Check remaining leaderboard entries
-- select count(*) from public.leaderboard_entries;
-- select username from public.profiles p
-- join public.leaderboard_entries le on le.user_id = p.id
-- order by username;
