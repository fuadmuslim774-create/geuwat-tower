# Troubleshooting: Data Tidak Masuk ke Supabase Dashboard

## 🔍 Problem

Data hanya masuk ke table `user_progress`, tetapi tidak masuk ke table lain seperti `profiles` dan `leaderboard_entries` di Supabase Dashboard.

## 📋 Understanding the Architecture

### Row Level Security (RLS) Design

**Semua table menggunakan RLS yang DENY client writes:**

```sql
-- ❌ Client TIDAK BISA write langsung ke database
create policy "profiles_deny_writes"
on public.profiles for insert
to anon, authenticated
with check (false);

create policy "leaderboard_deny_inserts"
on public.leaderboard_entries for insert
to anon, authenticated
with check (false);

create policy "user_progress_deny_writes"
on public.user_progress for insert
to anon, authenticated
with check (false);
```

**Ini adalah security design yang BENAR** - mencegah client langsung manipulasi database.

### How Data Gets Into Database

Data masuk ke database melalui **Server-Side API Endpoints** yang menggunakan **Service Role Key** untuk bypass RLS:

| Table | API Endpoint | When Called |
|-------|--------------|-------------|
| `profiles` | `/api/login` (POST) | Saat user login pertama kali |
| `leaderboard_entries` | `/api/leaderboard/sync` (POST) | Saat user complete stage |
| `user_progress` | `/api/progress/sync` (POST) | Saat user complete/game over |

## 🐛 Possible Causes

### 1. Environment Variables Tidak Diset

**Check `.env.local` file:**

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**CRITICAL**: `SUPABASE_SERVICE_ROLE_KEY` harus diset! Tanpa ini, API tidak bisa bypass RLS.

**How to get Service Role Key:**
1. Go to Supabase Dashboard
2. Settings → API
3. Copy **service_role** key (NOT anon key!)
4. Paste ke `.env.local`

### 2. Migration Belum Dijalankan

**Check apakah migration sudah diapply:**

```sql
-- Check if journey_started_at and journey_completed_at columns exist
SELECT column_name 
FROM information_schema.columns 
WHERE table_name = 'leaderboard_entries' 
  AND column_name IN ('journey_started_at', 'journey_completed_at');

-- Check if user_progress table exists
SELECT table_name 
FROM information_schema.tables 
WHERE table_name = 'user_progress';
```

**If missing, apply migrations:**
1. `supabase/migration_add_journey_timestamps.sql`
2. `supabase/migration_add_user_progress.sql`

### 3. API Endpoints Tidak Dipanggil

**Check browser console untuk API calls:**

Open Developer Tools → Network tab, filter by "Fetch/XHR":

- ✅ Should see: `POST /api/leaderboard/sync` when completing stage
- ✅ Should see: `POST /api/progress/sync` when completing stage or game over
- ❌ If missing: API not being called from client

**Check client code:**

```typescript
// lib/progress.ts - Should call these functions
syncLeaderboardEntry(progress);  // → /api/leaderboard/sync
syncFullProgress(progress);      // → /api/progress/sync
```

### 4. API Calls Failing Silently

**Check server logs:**

```bash
# In terminal where dev server is running
# Look for errors like:
[leaderboard/sync] Error upserting leaderboard entry: ...
[progress/sync] Error upserting progress: ...
```

**Check API response in browser:**

```javascript
// In browser console
fetch('/api/leaderboard/sync', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'your-user-id',
    rankStageId: 'alphabet',
    timeSec: 100
  })
}).then(r => r.json()).then(console.log);
```

Expected response:
```json
{
  "success": true,
  "message": "Leaderboard entry synced successfully."
}
```

### 5. User Profile Tidak Ada

**Leaderboard dan user_progress memerlukan profile yang sudah ada:**

```sql
-- Check if profile exists for user
SELECT id, username FROM public.profiles WHERE id = 'your-user-id';
```

If profile doesn't exist, create it first via `/api/login` or seed script.

## ✅ Verification Steps

### Step 1: Check Environment Variables

```bash
# In terminal
cat .env.local | grep SUPABASE
```

Should show:
- ✅ SUPABASE_URL
- ✅ SUPABASE_SERVICE_ROLE_KEY
- ✅ NEXT_PUBLIC_SUPABASE_URL
- ✅ NEXT_PUBLIC_SUPABASE_ANON_KEY

### Step 2: Restart Dev Server

```bash
# Stop current server (Ctrl+C)
# Start again
npm run dev
```

Environment variables are only loaded on server start!

### Step 3: Test API Endpoints Manually

**Test leaderboard sync:**

```bash
curl -X POST http://localhost:3000/api/leaderboard/sync \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "your-user-id",
    "rankStageId": "alphabet",
    "timeSec": 100
  }'
```

**Test progress sync:**

```bash
curl -X POST http://localhost:3000/api/progress/sync \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "your-user-id",
    "progress": {
      "journeyStartedAt": 1704067200000,
      "journeyCompletedAt": null,
      "stages": {}
    }
  }'
```

### Step 4: Check Database Directly

```sql
-- Check profiles
SELECT COUNT(*) FROM public.profiles;

-- Check leaderboard entries
SELECT COUNT(*) FROM public.leaderboard_entries;

-- Check user progress
SELECT COUNT(*) FROM public.user_progress;
```

### Step 5: Test Full Flow

1. Login with test account
2. Complete a stage
3. Check browser console for API calls
4. Check Supabase Dashboard for new data

## 🔧 Common Fixes

### Fix 1: Add Missing Environment Variable

```bash
# .env.local
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

Then restart dev server.

### Fix 2: Apply Missing Migrations

```sql
-- In Supabase SQL Editor
-- Run migration_add_journey_timestamps.sql
-- Run migration_add_user_progress.sql
```

### Fix 3: Force API Call

Add console.log to verify API is being called:

```typescript
// lib/progress.ts
async function syncLeaderboardEntry(progress: JourneyProgress) {
  console.log('[syncLeaderboardEntry] Starting sync...'); // ← Add this
  // ... rest of code
}
```

### Fix 4: Check Service Role Key Permissions

In Supabase Dashboard:
1. Settings → API
2. Verify service_role key has full access
3. Check RLS is enabled on tables
4. Verify policies are correct

## 📊 Expected Behavior

After completing a stage, you should see:

**In Browser Console:**
```
[syncLeaderboardEntry] Syncing to database
[syncLeaderboardEntry] Sync successful
[syncFullProgress] Syncing full progress to database
[syncFullProgress] Full progress sync successful
```

**In Supabase Dashboard:**
- `profiles` table: User profile exists
- `leaderboard_entries` table: Entry with rank_stage_id and time_sec
- `user_progress` table: Entry with progress_data (JSONB)

## 🆘 Still Not Working?

If data still not syncing after all checks:

1. **Check Supabase logs:**
   - Dashboard → Logs → API Logs
   - Look for errors or rejected requests

2. **Verify RLS policies:**
   ```sql
   -- Check policies on leaderboard_entries
   SELECT * FROM pg_policies WHERE tablename = 'leaderboard_entries';
   ```

3. **Test with service role directly:**
   ```typescript
   // In a test file
   import { createClient } from '@supabase/supabase-js';
   
   const supabase = createClient(
     process.env.SUPABASE_URL!,
     process.env.SUPABASE_SERVICE_ROLE_KEY!
   );
   
   const { data, error } = await supabase
     .from('leaderboard_entries')
     .insert({ user_id: 'test', rank_stage_id: 'alphabet', time_sec: 100 });
   
   console.log({ data, error });
   ```

4. **Check for typos in table/column names:**
   - `leaderboard_entries` (not `leaderboard_entry`)
   - `user_progress` (not `user_progresses`)
   - `rank_stage_id` (not `rankStageId`)

## 📝 Summary

**Why only user_progress has data:**
- ✅ Migration applied
- ✅ API endpoint exists and working
- ✅ Client code calls the API
- ✅ Service role key configured

**Why other tables don't have data:**
- ❌ Migration not applied (missing columns)
- ❌ API endpoint not being called
- ❌ Service role key not configured
- ❌ API calls failing silently
- ❌ User profile doesn't exist (foreign key constraint)

**The fix depends on which of the above is the actual cause!**
