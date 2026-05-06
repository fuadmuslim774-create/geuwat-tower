-- Seed 150 users for GEUWAT TOWER
-- Paste into Supabase SQL Editor to create test accounts
-- Each user has unique email, username, and password
-- Safe to re-run: if email already exists, it will not create duplicates
--
-- Email pattern: learner001@geuwat.com to learner150@geuwat.com
-- Password pattern: Pass001!GT to Pass150!GT
-- Username pattern: LEARNER_001 to LEARNER_150
-- Avatar rotation: chibi1, chibi2, chibi3, chibi4 (cycles every 4 users)
-- Batch: All users in gen_1

begin;

-- User 1
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner001@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner001@geuwat.com', 'Pass001!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_001', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 2
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner002@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner002@geuwat.com', 'Pass002!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_002', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 3
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner003@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner003@geuwat.com', 'Pass003!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_003', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 4
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner004@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner004@geuwat.com', 'Pass004!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_004', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 5
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner005@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner005@geuwat.com', 'Pass005!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_005', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 6
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner006@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner006@geuwat.com', 'Pass006!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_006', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 7
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner007@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner007@geuwat.com', 'Pass007!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_007', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 8
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner008@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner008@geuwat.com', 'Pass008!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_008', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 9
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner009@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner009@geuwat.com', 'Pass009!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_009', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 10
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner010@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner010@geuwat.com', 'Pass010!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_010', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 11
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner011@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner011@geuwat.com', 'Pass011!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_011', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 12
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner012@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner012@geuwat.com', 'Pass012!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_012', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 13
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner013@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner013@geuwat.com', 'Pass013!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_013', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 14
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner014@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner014@geuwat.com', 'Pass014!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_014', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 15
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner015@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner015@geuwat.com', 'Pass015!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_015', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 16
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner016@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner016@geuwat.com', 'Pass016!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_016', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 17
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner017@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner017@geuwat.com', 'Pass017!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_017', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 18
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner018@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner018@geuwat.com', 'Pass018!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_018', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 19
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner019@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner019@geuwat.com', 'Pass019!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_019', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 20
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner020@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner020@geuwat.com', 'Pass020!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_020', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 21
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner021@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner021@geuwat.com', 'Pass021!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_021', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 22
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner022@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner022@geuwat.com', 'Pass022!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_022', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 23
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner023@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner023@geuwat.com', 'Pass023!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_023', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 24
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner024@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner024@geuwat.com', 'Pass024!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_024', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 25
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner025@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner025@geuwat.com', 'Pass025!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_025', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 26
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner026@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner026@geuwat.com', 'Pass026!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_026', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 27
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner027@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner027@geuwat.com', 'Pass027!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_027', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 28
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner028@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner028@geuwat.com', 'Pass028!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_028', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 29
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner029@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner029@geuwat.com', 'Pass029!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_029', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 30
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner030@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner030@geuwat.com', 'Pass030!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_030', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 31
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner031@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner031@geuwat.com', 'Pass031!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_031', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 32
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner032@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner032@geuwat.com', 'Pass032!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_032', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 33
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner033@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner033@geuwat.com', 'Pass033!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_033', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 34
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner034@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner034@geuwat.com', 'Pass034!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_034', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 35
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner035@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner035@geuwat.com', 'Pass035!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_035', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 36
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner036@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner036@geuwat.com', 'Pass036!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_036', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 37
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner037@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner037@geuwat.com', 'Pass037!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_037', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 38
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner038@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner038@geuwat.com', 'Pass038!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_038', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 39
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner039@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner039@geuwat.com', 'Pass039!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_039', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 40
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner040@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner040@geuwat.com', 'Pass040!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_040', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 41
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner041@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner041@geuwat.com', 'Pass041!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_041', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 42
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner042@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner042@geuwat.com', 'Pass042!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_042', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 43
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner043@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner043@geuwat.com', 'Pass043!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_043', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 44
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner044@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner044@geuwat.com', 'Pass044!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_044', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 45
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner045@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner045@geuwat.com', 'Pass045!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_045', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 46
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner046@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner046@geuwat.com', 'Pass046!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_046', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 47
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner047@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner047@geuwat.com', 'Pass047!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_047', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 48
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner048@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner048@geuwat.com', 'Pass048!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_048', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 49
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner049@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner049@geuwat.com', 'Pass049!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_049', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 50
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner050@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner050@geuwat.com', 'Pass050!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_050', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 51
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner051@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner051@geuwat.com', 'Pass051!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_051', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 52
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner052@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner052@geuwat.com', 'Pass052!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_052', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 53
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner053@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner053@geuwat.com', 'Pass053!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_053', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 54
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner054@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner054@geuwat.com', 'Pass054!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_054', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 55
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner055@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner055@geuwat.com', 'Pass055!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_055', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 56
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner056@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner056@geuwat.com', 'Pass056!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_056', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 57
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner057@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner057@geuwat.com', 'Pass057!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_057', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 58
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner058@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner058@geuwat.com', 'Pass058!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_058', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 59
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner059@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner059@geuwat.com', 'Pass059!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_059', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 60
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner060@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner060@geuwat.com', 'Pass060!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_060', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 61
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner061@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner061@geuwat.com', 'Pass061!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_061', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 62
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner062@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner062@geuwat.com', 'Pass062!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_062', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 63
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner063@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner063@geuwat.com', 'Pass063!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_063', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 64
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner064@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner064@geuwat.com', 'Pass064!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_064', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 65
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner065@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner065@geuwat.com', 'Pass065!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_065', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 66
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner066@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner066@geuwat.com', 'Pass066!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_066', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 67
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner067@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner067@geuwat.com', 'Pass067!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_067', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 68
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner068@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner068@geuwat.com', 'Pass068!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_068', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 69
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner069@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner069@geuwat.com', 'Pass069!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_069', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 70
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner070@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner070@geuwat.com', 'Pass070!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_070', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 71
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner071@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner071@geuwat.com', 'Pass071!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_071', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 72
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner072@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner072@geuwat.com', 'Pass072!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_072', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 73
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner073@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner073@geuwat.com', 'Pass073!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_073', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 74
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner074@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner074@geuwat.com', 'Pass074!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_074', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 75
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner075@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner075@geuwat.com', 'Pass075!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_075', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 76
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner076@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner076@geuwat.com', 'Pass076!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_076', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 77
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner077@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner077@geuwat.com', 'Pass077!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_077', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 78
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner078@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner078@geuwat.com', 'Pass078!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_078', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 79
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner079@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner079@geuwat.com', 'Pass079!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_079', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 80
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner080@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner080@geuwat.com', 'Pass080!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_080', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 81
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner081@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner081@geuwat.com', 'Pass081!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_081', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 82
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner082@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner082@geuwat.com', 'Pass082!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_082', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 83
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner083@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner083@geuwat.com', 'Pass083!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_083', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 84
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner084@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner084@geuwat.com', 'Pass084!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_084', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 85
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner085@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner085@geuwat.com', 'Pass085!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_085', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 86
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner086@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner086@geuwat.com', 'Pass086!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_086', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 87
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner087@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner087@geuwat.com', 'Pass087!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_087', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 88
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner088@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner088@geuwat.com', 'Pass088!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_088', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 89
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner089@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner089@geuwat.com', 'Pass089!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_089', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 90
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner090@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner090@geuwat.com', 'Pass090!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_090', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 91
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner091@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner091@geuwat.com', 'Pass091!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_091', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 92
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner092@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner092@geuwat.com', 'Pass092!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_092', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 93
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner093@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner093@geuwat.com', 'Pass093!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_093', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 94
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner094@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner094@geuwat.com', 'Pass094!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_094', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 95
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner095@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner095@geuwat.com', 'Pass095!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_095', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 96
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner096@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner096@geuwat.com', 'Pass096!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_096', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 97
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner097@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner097@geuwat.com', 'Pass097!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_097', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 98
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner098@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner098@geuwat.com', 'Pass098!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_098', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 99
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner099@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner099@geuwat.com', 'Pass099!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_099', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 100
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner100@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner100@geuwat.com', 'Pass100!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_100', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 101
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner101@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner101@geuwat.com', 'Pass101!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_101', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 102
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner102@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner102@geuwat.com', 'Pass102!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_102', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 103
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner103@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner103@geuwat.com', 'Pass103!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_103', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 104
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner104@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner104@geuwat.com', 'Pass104!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_104', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 105
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner105@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner105@geuwat.com', 'Pass105!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_105', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 106
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner106@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner106@geuwat.com', 'Pass106!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_106', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 107
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner107@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner107@geuwat.com', 'Pass107!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_107', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 108
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner108@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner108@geuwat.com', 'Pass108!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_108', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 109
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner109@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner109@geuwat.com', 'Pass109!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_109', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 110
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner110@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner110@geuwat.com', 'Pass110!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_110', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 111
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner111@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner111@geuwat.com', 'Pass111!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_111', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 112
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner112@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner112@geuwat.com', 'Pass112!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_112', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 113
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner113@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner113@geuwat.com', 'Pass113!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_113', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 114
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner114@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner114@geuwat.com', 'Pass114!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_114', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 115
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner115@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner115@geuwat.com', 'Pass115!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_115', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 116
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner116@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner116@geuwat.com', 'Pass116!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_116', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 117
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner117@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner117@geuwat.com', 'Pass117!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_117', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 118
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner118@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner118@geuwat.com', 'Pass118!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_118', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 119
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner119@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner119@geuwat.com', 'Pass119!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_119', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 120
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner120@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner120@geuwat.com', 'Pass120!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_120', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 121
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner121@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner121@geuwat.com', 'Pass121!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_121', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 122
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner122@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner122@geuwat.com', 'Pass122!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_122', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 123
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner123@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner123@geuwat.com', 'Pass123!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_123', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 124
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner124@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner124@geuwat.com', 'Pass124!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_124', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 125
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner125@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner125@geuwat.com', 'Pass125!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_125', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 126
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner126@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner126@geuwat.com', 'Pass126!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_126', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 127
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner127@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner127@geuwat.com', 'Pass127!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_127', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 128
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner128@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner128@geuwat.com', 'Pass128!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_128', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 129
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner129@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner129@geuwat.com', 'Pass129!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_129', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 130
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner130@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner130@geuwat.com', 'Pass130!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_130', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 131
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner131@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner131@geuwat.com', 'Pass131!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_131', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 132
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner132@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner132@geuwat.com', 'Pass132!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_132', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 133
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner133@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner133@geuwat.com', 'Pass133!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_133', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 134
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner134@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner134@geuwat.com', 'Pass134!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_134', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 135
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner135@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner135@geuwat.com', 'Pass135!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_135', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 136
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner136@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner136@geuwat.com', 'Pass136!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_136', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 137
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner137@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner137@geuwat.com', 'Pass137!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_137', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 138
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner138@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner138@geuwat.com', 'Pass138!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_138', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 139
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner139@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner139@geuwat.com', 'Pass139!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_139', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 140
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner140@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner140@geuwat.com', 'Pass140!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_140', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 141
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner141@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner141@geuwat.com', 'Pass141!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_141', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 142
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner142@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner142@geuwat.com', 'Pass142!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_142', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 143
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner143@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner143@geuwat.com', 'Pass143!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_143', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 144
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner144@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner144@geuwat.com', 'Pass144!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_144', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 145
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner145@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner145@geuwat.com', 'Pass145!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_145', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 146
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner146@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner146@geuwat.com', 'Pass146!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_146', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 147
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner147@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner147@geuwat.com', 'Pass147!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_147', 'chibi3', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 148
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner148@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner148@geuwat.com', 'Pass148!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_148', 'chibi4', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 149
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner149@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner149@geuwat.com', 'Pass149!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_149', 'chibi1', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;

-- User 150
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = 'learner150@geuwat.com';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('learner150@geuwat.com', 'Pass150!GT');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, 'LEARNER_150', 'chibi2', 'gen_1')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;
commit;

-- Summary:
-- Total users created: 150
-- Batch: All users in gen_1
-- Avatars: Evenly distributed across chibi1, chibi2, chibi3, chibi4
-- All passwords follow pattern: Pass###!GT where ### is the user number
