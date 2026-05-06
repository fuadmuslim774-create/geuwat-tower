# Bugfix: Completion Timer Resets When Logging In From Different Device

## Status: ✅ FIXED

## Problem

Completion time mulai dari awal lagi ketika user login dari perangkat lain dengan akun yang sama. Timer yang seharusnya menunjukkan waktu sejak journey dimulai malah reset ke 00:00:00.

## Root Cause

1. **localStorage Empty on New Device**: Saat login dari perangkat baru, localStorage kosong karena data hanya tersimpan di browser lokal.

2. **getOrInitProgress() Creates New journeyStartedAt**: Fungsi ini membuat `journeyStartedAt` baru dengan `Date.now()` setiap kali localStorage kosong:
   ```typescript
   const fresh = { ...createInitialProgress(), journeyStartedAt: Date.now() };
   ```

3. **Async Restore Too Late**: `restoreProgressFromDatabase()` dipanggil tapi async, sehingga progress baru dengan `journeyStartedAt` baru sudah di-create SEBELUM restore selesai.

4. **New Timestamp Overwrites Correct One**: `journeyStartedAt` baru (Date.now()) menimpa timestamp yang benar dari database.

## Solution

### 1. Don't Set journeyStartedAt on Init

**File**: `lib/progress.ts`

Changed `getOrInitProgress()` to NOT set `journeyStartedAt` when creating initial progress:

```typescript
// Before (Bug)
const fresh = { ...createInitialProgress(), journeyStartedAt: Date.now() };

// After (Fixed)
const fresh = createInitialProgress(); // journeyStartedAt: null
```

### 2. Set journeyStartedAt ONLY on First Stage Completion

**File**: `lib/progress.ts`

`journeyStartedAt` is now ONLY set when user completes their first stage:

```typescript
// Set journeyStartedAt ONLY if it's null (first stage completion)
if (nextProgress.journeyStartedAt === null) {
  nextProgress.journeyStartedAt = now;
  console.log('[updateOnStageComplete] Setting journeyStartedAt for first time:', now);
}
```

### 3. Restore Progress on First Load

**File**: `components/AuthGate.tsx`

Added logic to restore progress from database immediately after login:

```typescript
// Restore progress from database on first load
const hasRestoredProgress = sessionStorage.getItem('progress_restored');
if (!hasRestoredProgress) {
  console.log('[AuthGate] First load, attempting to restore progress from database');
  restoreProgressFromDatabase().then((restored) => {
    if (restored) {
      console.log('[AuthGate] Progress restored from database');
      window.dispatchEvent(new Event('gt_progress_changed'));
    }
    // Mark as restored to prevent repeated attempts
    sessionStorage.setItem('progress_restored', 'true');
  });
}
```

### 4. Don't Infer journeyStartedAt from Date.now()

**File**: `lib/progress.ts`

Changed inference logic to NOT use `Date.now()` as fallback:

```typescript
// Before (Bug)
const inferredStartedAt = playedTimes.length > 0 ? Math.min(...playedTimes) : Date.now();

// After (Fixed)
const inferredStartedAt = playedTimes.length > 0 ? Math.min(...playedTimes) : null;
```

## How It Works Now

### Scenario 1: New User (First Time)

1. User creates account and logs in
2. localStorage empty → `getOrInitProgress()` returns progress with `journeyStartedAt: null`
3. User completes first stage (e.g., Alphabet)
4. `updateOnStageComplete()` sets `journeyStartedAt = Date.now()`
5. Progress synced to database with correct timestamp
6. Timer starts counting from this moment

### Scenario 2: Existing User Logs In From New Device

1. User logs in from new device
2. localStorage empty on new device
3. **AuthGate** immediately calls `restoreProgressFromDatabase()`
4. Progress restored from database with correct `journeyStartedAt`
5. Progress written to localStorage
6. `getOrInitProgress()` returns restored progress (NOT new one)
7. Timer shows correct elapsed time from original `journeyStartedAt`

### Scenario 3: Existing User Logs In From Same Device

1. User logs in from same device
2. localStorage has existing progress
3. `getOrInitProgress()` returns existing progress
4. Timer continues from correct `journeyStartedAt`

## Testing

### Test Case 1: Login From Different Device

1. Login with account A on Device 1
2. Complete some stages (e.g., Alphabet, Lax Vowel)
3. Note the completion time shown
4. Logout from Device 1
5. Login with account A on Device 2
6. **Expected**: Completion time matches Device 1 (not reset to 00:00:00)
7. **Expected**: Timer continues counting from original start time

### Test Case 2: Complete Stage on Different Device

1. Login with account A on Device 1
2. Complete Alphabet stage
3. Note the `journeyStartedAt` timestamp in database
4. Logout from Device 1
5. Login with account A on Device 2
6. Complete Lax Vowel stage
7. **Expected**: `journeyStartedAt` unchanged in database
8. **Expected**: Completion time includes time from both stages

### Test Case 3: New User First Stage

1. Create new account
2. Login
3. Complete Alphabet stage
4. **Expected**: `journeyStartedAt` set to completion time
5. **Expected**: Timer starts counting from this moment
6. Check database: `journey_started_at` should match completion time

## Database Schema

Uses existing columns from `migration_add_journey_timestamps.sql`:
- `journey_started_at` (timestamptz) - When user first completed a stage
- `journey_completed_at` (timestamptz) - When user completed all stages

## Files Modified

- `lib/progress.ts` - Fixed `getOrInitProgress()` and `updateOnStageComplete()`
- `components/AuthGate.tsx` - Added progress restore on first load

## Key Changes

1. ✅ `getOrInitProgress()` no longer sets `journeyStartedAt` on init
2. ✅ `journeyStartedAt` ONLY set on first stage completion
3. ✅ `AuthGate` restores progress from database immediately after login
4. ✅ Use `sessionStorage` to track restore status (prevent repeated calls)
5. ✅ Don't infer `journeyStartedAt` from `Date.now()` as fallback

## Benefits

1. **Persistent Timer**: Completion time persists across devices and login sessions
2. **Accurate Tracking**: Timer always shows correct elapsed time from first stage completion
3. **No Reset**: Timer never resets when logging in from different device
4. **Database as Source of Truth**: Progress always restored from database on new device

## Migration Required

**IMPORTANT**: Migration `supabase/migration_add_journey_timestamps.sql` must be applied to database for this fix to work.

If not applied yet:
1. Open Supabase Dashboard → SQL Editor
2. Copy contents of `supabase/migration_add_journey_timestamps.sql`
3. Run the migration
4. Verify columns exist:
   ```sql
   SELECT column_name, data_type 
   FROM information_schema.columns 
   WHERE table_name = 'leaderboard_entries' 
   AND column_name IN ('journey_started_at', 'journey_completed_at');
   ```

## Summary

✅ **Problem**: Completion timer reset to 00:00:00 when logging in from different device
✅ **Root Cause**: `journeyStartedAt` created with `Date.now()` on init, overwriting correct timestamp from database
✅ **Solution**: Don't set `journeyStartedAt` on init, only on first stage completion, and restore from database immediately after login
✅ **Result**: Completion timer persists correctly across devices and login sessions

Completion time sekarang tetap konsisten di semua perangkat dan tidak reset saat login dari perangkat lain!
