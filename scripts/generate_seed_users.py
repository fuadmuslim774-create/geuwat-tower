#!/usr/bin/env python3
"""
Generate SQL seed file for 150 GEUWAT TOWER users
Each user has unique email, username, and password
"""

def generate_user_block(user_num):
    """Generate SQL block for a single user"""
    email = f"learner{user_num:03d}@geuwat.com"
    password = f"Pass{user_num:03d}!GT"
    username = f"LEARNER_{user_num:03d}"
    
    # Rotate through avatars (chibi1, chibi2, chibi3, chibi4)
    avatars = ['chibi1', 'chibi2', 'chibi3', 'chibi4']
    avatar = avatars[(user_num - 1) % 4]
    
    # All users in gen_1
    batch_id = "gen_1"
    
    return f"""-- User {user_num}
do $$
declare
  v_account_id uuid;
begin
  select account_id into v_account_id from public.auth_email_password where email = '{email}';
  if v_account_id is null then
    v_account_id := public.create_account_with_email_password('{email}', '{password}');
  end if;
  insert into public.profiles (id, username, avatar_id, batch_id)
  values (v_account_id, '{username}', '{avatar}', '{batch_id}')
  on conflict (id) do update set username = excluded.username, avatar_id = excluded.avatar_id, batch_id = excluded.batch_id;
end $$;
"""

def generate_seed_file(num_users=150):
    """Generate complete SQL seed file"""
    
    header = f"""-- Seed {num_users} users for GEUWAT TOWER
-- Paste into Supabase SQL Editor to create test accounts
-- Each user has unique email, username, and password
-- Safe to re-run: if email already exists, it will not create duplicates
--
-- Email pattern: learner001@geuwat.com to learner{num_users:03d}@geuwat.com
-- Password pattern: Pass001!GT to Pass{num_users:03d}!GT
-- Username pattern: LEARNER_001 to LEARNER_{num_users:03d}
-- Avatar rotation: chibi1, chibi2, chibi3, chibi4 (cycles every 4 users)
-- Batch: All users in gen_1

begin;

"""
    
    footer = """commit;

-- Summary:
-- Total users created: 150
-- Batch: All users in gen_1
-- Avatars: Evenly distributed across chibi1, chibi2, chibi3, chibi4
-- All passwords follow pattern: Pass###!GT where ### is the user number
"""
    
    # Generate all user blocks
    user_blocks = [generate_user_block(i) for i in range(1, num_users + 1)]
    
    # Combine everything
    sql_content = header + "\n".join(user_blocks) + footer
    
    return sql_content

if __name__ == "__main__":
    import os
    
    sql_content = generate_seed_file(150)
    
    # Write to file (use absolute path from script location)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    output_file = os.path.join(project_root, "supabase", "seed_150_users.sql")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(sql_content)
    
    print(f"✅ Generated {output_file}")
    print(f"📊 Total users: 150")
    print(f"📧 Email pattern: learner001@geuwat.com to learner150@geuwat.com")
    print(f"🔑 Password pattern: Pass001!GT to Pass150!GT")
    print(f"👤 Username pattern: LEARNER_001 to LEARNER_150")
    print(f"🎭 Avatars: chibi1, chibi2, chibi3, chibi4 (rotating)")
    print(f"📦 Batch: All users in gen_1")
