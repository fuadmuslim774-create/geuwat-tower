# Bugfix Update: Initial Journey Timestamp Sync

## Problem yang Ditemukan

Setelah migration database, timer masih reset ke nol saat logout dan login kembali. 

**Root Cause**: 
- `syncLeaderboardEntry()` hanya dipanggil saat user **complete stage**
- Jika user login tapi belum complete stage apapun → `journeyStartedAt` tidak pernah di-sync ke database
- Saat logout dan login lagi → Local storage hilang, database tidak punya data → Timer reset ke nol

## Solution

Menambahkan 2 mekanisme sync:

### 1. Initial Sync saat Login/First Load
**File**: `lib/progress.ts`

Fungsi `getOrInitProgress()` sekarang memanggil `syncInitialJourneyStart()` untuk:
- Sync `journeyStartedAt` ke database **segera saat user pertama kali login**
- Tidak perlu menunggu user complete stage
- Memastikan timestamp tersimpan di database dari awal

### 2. Bidirectional Sync dari Database ke Local Storage
**File**: `lib/supabase/leaderboard.ts`

Fungsi `syncJourneyTimestampsToLocalStorage()` untuk:
- Saat load leaderboard, fetch journey timestamps dari database
- Jika database punya data tapi local storage tidak → Sync dari DB ke local storage
- Memastikan timer konsisten meskipun local storage kosong

## How It Works

### Scenario 1: User Baru Login Pertama Kali
```
1. User login → getOrInitProgress() dipanggil
2. journeyStartedAt = Date.now() (disimpan di local storage)
3. syncInitialJourneyStart() dipanggil → Sync ke database
4. Database sekarang punya journey_started_at
5. User logout → Local storage hilang
6. User login lagi → Load leaderboard
7. syncJourneyTimestampsToLocalStorage() → Restore dari database ke local storage
8. ✅ Timer melanjutkan dari waktu yang benar!
```

### Scenario 2: User Existing (Sudah Punya Progress)
```
1. User login → getOrInitProgress() dipanggil
2. Local storage sudah ada journeyStartedAt
3. syncInitialJourneyStart() dipanggil → Sync ke database (update)
4. Database sekarang punya journey_started_at
5. User logout → Local storage hilang
6. User login lagi → Load leaderboard
7. syncJourneyTimestampsToLocalStorage() → Restore dari database
8. ✅ Timer melanjutkan dari waktu yang benar!
```

### Scenario 3: User Login dari Device Berbeda
```
1. User login dari Device A → journeyStartedAt di-sync ke database
2. User login dari Device B (local storage kosong)
3. Load leaderboard → syncJourneyTimestampsToLocalStorage()
4. journey_started_at dari database di-copy ke local storage Device B
5. ✅ Timer sama di semua device!
```

## Changes Made

### 1. `lib/progress.ts`
- Added `syncInitialJourneyStart()` function
- Modified `getOrInitProgress()` to call `syncInitialJourneyStart()`
- Sync happens immediately when journeyStartedAt is set

### 2. `lib/supabase/leaderboard.ts`
- Added `syncJourneyTimestampsToLocalStorage()` function
- Modified `fetchRanksBase()` to sync DB timestamps to local storage
- Bidirectional sync: DB ↔ Local Storage

## Testing

### Manual Test Steps

1. **Clear browser data** (untuk simulate fresh login)
2. **Login** ke aplikasi
3. **Check console logs**:
   ```
   [syncInitialJourneyStart] Syncing initial journey start to database: {...}
   [syncInitialJourneyStart] Initial sync successful: {...}
   ```
4. **Check database**:
   ```sql
   SELECT user_id, journey_started_at, journey_completed_at
   FROM leaderboard_entries
   WHERE user_id = 'YOUR_USER_ID';
   ```
   - `journey_started_at` harus terisi (bukan null)

5. **Logout dan login kembali**
6. **Load leaderboard page**
7. **Check console logs**:
   ```
   [syncJourneyTimestamps] Synced journeyStartedAt from DB to local storage: ...
   [syncJourneyTimestamps] Local storage updated with DB timestamps
   ```
8. **Check timer**: Harus melanjutkan dari waktu sebelumnya (tidak reset)

### Automated Tests

Run existing tests to ensure no regressions:
```bash
npm test -- lib/leaderboard.bugfix.test.ts --run
```

Expected: All 11 tests passing ✅

## Deployment

1. **Ensure database migration already applied** (from previous fix)
2. **Deploy updated code**:
   - `lib/progress.ts`
   - `lib/supabase/leaderboard.ts`
3. **Monitor console logs** for sync messages
4. **Verify database** has journey_started_at populated

## Verification Checklist

- [ ] Database migration applied successfully
- [ ] Code deployed to production
- [ ] Console logs show sync messages
- [ ] Database has journey_started_at for active users
- [ ] Timer persists across logout/login
- [ ] Timer consistent across different devices
- [ ] No TypeScript errors
- [ ] All tests passing

## Troubleshooting

### Timer still resets after logout/login

**Check 1**: Database has journey_started_at?
```sql
SELECT user_id, journey_started_at 
FROM leaderboard_entries 
WHERE user_id = 'YOUR_USER_ID';
```

**Check 2**: Console logs show sync messages?
- Look for `[syncInitialJourneyStart]` on login
- Look for `[syncJourneyTimestamps]` on leaderboard load

**Check 3**: API endpoint working?
```bash
# Check network tab in browser DevTools
# Should see POST to /api/leaderboard/sync
```

### Console shows sync errors

**Error: "No user session found"**
- User not logged in properly
- Check `getCurrentUser()` returns valid user

**Error: "API call failed"**
- Check API endpoint is deployed
- Check Supabase connection
- Check database permissions

**Error: "Failed to verify user profile"**
- User profile doesn't exist in database
- Check profiles table has entry for user

## Notes

- Initial sync is **non-blocking** - errors won't prevent user from playing
- Sync happens **asynchronously** - doesn't slow down page load
- **Bidirectional sync** ensures consistency between DB and local storage
- **Fallback mechanism** - if DB sync fails, local storage still works
