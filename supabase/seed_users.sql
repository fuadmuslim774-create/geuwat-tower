-- Seed users for GEUWAT TOWER (NO Supabase Auth)
-- Paste into Supabase SQL Editor.
--
-- Creates account + email/password credential, then provisions a profile row.
-- Safe to re-run: if email already exists, it will not create duplicates.

begin;

-- 1) Configure your new user here
--    - email must be unique
--    - password is stored as bcrypt hash via pgcrypto crypt()
--    - batch_id controls generation/cohort (e.g. gen_1)
do $$
declare
  v_email text := 'user@geuwat.com';
  v_password text := 'user123';
  v_username text := 'LEARNER_01';
  v_avatar public.avatar_id := 'chibi1';
  v_batch_id text := 'gen_1';
  v_account_id uuid;
begin
  -- If email exists, reuse the existing account_id
  select account_id into v_account_id
  from public.auth_email_password
  where email = lower(trim(v_email));

  if v_account_id is null then
    v_account_id := public.create_account_with_email_password(v_email, v_password);
  end if;

  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, v_username, v_avatar, v_batch_id)
  on conflict (id) do update set
    username = excluded.username,
    avatar_id = excluded.avatar_id,
    batch_id = excluded.batch_id;
end $$;

commit;

