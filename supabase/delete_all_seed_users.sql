-- Delete all seed users (LEARNER_001 to LEARNER_150)
-- WARNING: This will permanently delete these accounts
-- Use this if you don't need the seed users anymore

begin;

-- Delete profiles (this will cascade delete leaderboard_entries and auth_email_password)
delete from public.profiles
where username like 'LEARNER_%';

-- Delete accounts (if any orphaned accounts remain)
delete from public.accounts
where id in (
  select account_id from public.auth_email_password
  where email like 'learner%@geuwat.com'
);

commit;

-- Verify: Check remaining users
-- select count(*) from public.profiles;
-- select username from public.profiles order by username;
