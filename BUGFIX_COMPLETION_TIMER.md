# Bugfix: Completion Timer Not Starting

## Status: ✅ COMPLETE

## Problem
Ketika user pertama kali login ke aplikasi GEUWAT TOWER, completion timer pada halaman Global Ranks dan Generation Ranks menampilkan "--:--:--" dan tidak mulai berjalan. Timer seharusnya mulai menghitung waktu dari pertama kali user login hingga user menyelesaikan semua stage.

## Root Cause
1. Sistem tidak menginisialisasi `time_sec` di tabel `leaderboard_entries` untuk user baru
2. UI leaderboard hanya menampilkan `time_sec` dari database tanpa menghitung elapsed time untuk user yang sedang dalam progress
3. `journeyStartedAt` dan `journeyCompletedAt` hanya disimpan di local storage, tidak di database
4. Tidak ada mekanisme untuk sync progress dari client ke server

## Solution Implemented

### Phase 1: Server-Side API Endpoint ✅
**File**: `app/api/leaderboard/sync/route.ts`
- Created POST endpoint untuk sync leaderboard entry dari client ke database
- Accepts payload: `{ userId, rankStageId, timeSec, journeyStartedAt, journeyCompletedAt }`
- Implements upsert logic menggunakan Supabase service role client
- Validates input data dan authentication

### Phase 2: Client-Side Progress Tracking ✅
**File**: `lib/progress.ts`
- Modified `updateOnStageComplete` untuk call API `/api/leaderboard/sync` setelah stage complete
- Added `syncLeaderboardEntry` function untuk sync progress ke database
- Added `syncInitialJourneyStart` function untuk sync saat user pertama kali login
- Added `syncFullProgress` function untuk sync full progress ke database
- Added error handling untuk API call failures

### Phase 3: Leaderboard Display Logic ✅
**File**: `lib/supabase/leaderboard.ts`
- Modified `fetchRanksBase` untuk calculate elapsed time untuk user dengan `time_sec` null
- Uses `journey_started_at` from database (persisted across sessions)
- Fallback to local storage jika database belum ter-update
- Added `syncJourneyTimestampsToLocalStorage` untuk sync timestamps dari DB ke local storage

### Phase 4: Client-Side Timer Updates ✅
**Files**: `app/ranks/page.tsx`, `app/generation-ranks/page.tsx`
- Added useEffect hook untuk update timer setiap detik
- Timer increments automatically untuk current user yang sedang dalam progress
- Shows static time untuk user yang sudah complete journey

### Phase 5: Database Schema Enhancement ✅
**File**: `supabase/migration_add_journey_timestamps.sql`
- Added columns `journey_started_at` dan `journey_completed_at` ke tabel `leaderboard_entries`
- Added indexes untuk better query performance
- Updated views `v_global_ranks` dan `v_global_ranks_ordered` untuk include new fields
- **Migration ready to apply** - see instructions below

## Testing

### Bug Condition Tests ✅
- Property 1: Real-Time Completion Timer for In-Progress Users
- Test confirms bug exists on unfixed code (shows "--:--:--")
- Test passes on fixed code (shows running timer)

### Preservation Tests ✅
- Property 2: Final Completion Time and Not-Started Users
- Completed users still show final static time (unchanged)
- Not-started users still show "--:--:--"
- Ranking order preserved (rank_stage_id desc, time_sec asc)
- Stage-level time tracking still works correctly

## How to Apply Migration

The migration file `supabase/migration_add_journey_timestamps.sql` is ready to be applied to the database.

### Steps:
1. Open Supabase Dashboard
2. Go to SQL Editor
3. Copy the contents of `supabase/migration_add_journey_timestamps.sql`
4. Paste into SQL Editor
5. Click "Run" to execute the migration

### What the Migration Does:
- Adds `journey_started_at` and `journey_completed_at` columns to `leaderboard_entries` table
- Creates indexes for better query performance
- Updates database views to include the new timestamp fields

### After Migration:
- Timer will persist across logout/login sessions
- No more reliance on local storage for journey timestamps
- More reliable and consistent timer behavior

## Benefits

### Before Fix:
- ❌ Timer shows "--:--:--" for new users
- ❌ Timer doesn't start running
- ❌ Progress lost on logout/login
- ❌ Timer resets on page refresh

### After Fix:
- ✅ Timer starts immediately when user logs in
- ✅ Timer shows correct elapsed time
- ✅ Timer persists across logout/login (after migration)
- ✅ Timer continues from correct time on page refresh
- ✅ Real-time updates every second
- ✅ Final time saved correctly when journey complete

## Files Modified

### New Files:
- `app/api/leaderboard/sync/route.ts` - API endpoint for leaderboard sync
- `supabase/migration_add_journey_timestamps.sql` - Database migration

### Modified Files:
- `lib/progress.ts` - Added sync functions
- `lib/supabase/leaderboard.ts` - Added real-time calculation and timestamp sync
- `app/ranks/page.tsx` - Added timer update logic
- `app/generation-ranks/page.tsx` - Added timer update logic

## Next Steps

1. **Apply the migration** to Supabase database (see instructions above)
2. **Test the fix**:
   - Login as a new user
   - Check that timer starts from 00:00:00 on leaderboard
   - Complete a stage
   - Verify timer continues running
   - Refresh page and verify timer persists
   - Logout and login again, verify timer persists (after migration)
3. **Monitor for issues**:
   - Check browser console for any sync errors
   - Verify SUPABASE_SERVICE_ROLE_KEY is set in `.env.local`
   - Check Supabase logs for any API errors

## Documentation

Full spec documentation available in:
- `.kiro/specs/completion-timer-not-starting/bugfix.md` - Bug analysis and requirements
- `.kiro/specs/completion-timer-not-starting/design.md` - Design and implementation details
- `.kiro/specs/completion-timer-not-starting/tasks.md` - Implementation tasks and status
