# Seed 150 Users untuk GEUWAT TOWER

File ini berisi SQL script untuk membuat 150 akun test user di database Supabase.

## 📋 Informasi User

### Pattern Data
- **Email**: `learner001@geuwat.com` sampai `learner150@geuwat.com`
- **Password**: `Pass001!GT` sampai `Pass150!GT`
- **Username**: `LEARNER_001` sampai `LEARNER_150`
- **Avatar**: Rotasi `chibi1`, `chibi2`, `chibi3`, `chibi4` (setiap 4 user)
- **Batch/Generation**: Semua user menggunakan `gen_1`

### Distribusi
- **Total Users**: 150 akun
- **Batch**: Semua user dalam `gen_1`
- **Avatar Distribution**: Merata di 4 avatar (chibi1-4)

## 🚀 Cara Menggunakan

### Option 1: Via Supabase Dashboard (Recommended)

1. Buka **Supabase Dashboard** project Anda
2. Navigasi ke **SQL Editor**
3. Klik **New Query**
4. Copy seluruh isi file `seed_150_users.sql`
5. Paste ke SQL Editor
6. Klik **Run** untuk execute

### Option 2: Via Supabase CLI

```bash
# Jika Anda menggunakan Supabase CLI
supabase db push
```

## ✅ Verifikasi

Setelah menjalankan script, verifikasi bahwa users sudah dibuat:

```sql
-- Check total users created
SELECT COUNT(*) as total_users 
FROM public.profiles;

-- Check users by generation (should all be gen_1)
SELECT batch_id, COUNT(*) as user_count 
FROM public.profiles 
GROUP BY batch_id 
ORDER BY batch_id;

-- Check avatar distribution
SELECT avatar_id, COUNT(*) as user_count 
FROM public.profiles 
GROUP BY avatar_id 
ORDER BY avatar_id;

-- View sample users
SELECT username, avatar_id, batch_id 
FROM public.profiles 
ORDER BY username 
LIMIT 10;
```

Expected results:
- Total users: 150
- All users in gen_1 (150 users)
- 4 avatars with ~37-38 users each

## 🔐 Login Test

Anda bisa login dengan salah satu akun berikut untuk testing:

| Email | Password | Username | Avatar | Generation |
|-------|----------|----------|--------|------------|
| learner001@geuwat.com | Pass001!GT | LEARNER_001 | chibi1 | gen_1 |
| learner025@geuwat.com | Pass025!GT | LEARNER_025 | chibi1 | gen_1 |
| learner050@geuwat.com | Pass050!GT | LEARNER_050 | chibi2 | gen_1 |
| learner075@geuwat.com | Pass075!GT | LEARNER_075 | chibi3 | gen_1 |
| learner100@geuwat.com | Pass100!GT | LEARNER_100 | chibi4 | gen_1 |
| learner150@geuwat.com | Pass150!GT | LEARNER_150 | chibi2 | gen_1 |

## 🔄 Re-run Safety

Script ini **aman untuk dijalankan berulang kali**:
- Jika email sudah ada, tidak akan membuat duplikat
- Akan mengupdate profile data jika user sudah ada
- Menggunakan `on conflict do update` untuk idempotency

## 🛠️ Regenerate Script

Jika Anda perlu memodifikasi atau regenerate script:

```bash
# Edit scripts/generate_seed_users.py sesuai kebutuhan
# Kemudian jalankan:
python scripts/generate_seed_users.py
```

Script Python akan generate ulang file `seed_150_users.sql` dengan pattern yang sama.

## 📝 Notes

- Semua password menggunakan pattern yang sama untuk kemudahan testing
- Dalam production, gunakan password yang lebih kuat dan unik
- Avatar dan batch didistribusikan secara merata untuk testing leaderboard
- Script menggunakan function `create_account_with_email_password()` yang sudah ada di database

## 🗑️ Cleanup (Optional)

Jika Anda ingin menghapus semua test users:

```sql
-- WARNING: This will delete all test users and their data
-- Only run this in development/testing environment

begin;

-- Delete profiles (will cascade to leaderboard_entries and user_progress)
DELETE FROM public.profiles 
WHERE username LIKE 'LEARNER_%';

-- Delete auth credentials
DELETE FROM public.auth_email_password 
WHERE email LIKE 'learner%@geuwat.com';

commit;
```

## 📊 Use Cases

Script ini berguna untuk:
- **Load Testing**: Test performa dengan banyak user
- **Leaderboard Testing**: Populate leaderboard dengan data realistis
- **Generation Ranks Testing**: Test filtering by batch (all in gen_1)
- **UI Testing**: Test tampilan dengan berbagai avatar dan username
- **Database Migration Testing**: Verify migrations work dengan existing data

## 🆘 Troubleshooting

### Error: function create_account_with_email_password does not exist
- Pastikan schema database sudah disetup dengan benar
- Check file `supabase/schema.sql` dan apply jika belum

### Error: duplicate key value violates unique constraint
- Ini normal jika user sudah ada
- Script akan skip user yang sudah ada dan lanjut ke user berikutnya

### Error: permission denied
- Pastikan Anda menggunakan service role key atau admin access
- Check RLS policies di Supabase Dashboard

## 📞 Support

Jika ada masalah atau pertanyaan:
1. Check Supabase logs untuk error details
2. Verify database schema sudah complete
3. Ensure proper permissions untuk create users
