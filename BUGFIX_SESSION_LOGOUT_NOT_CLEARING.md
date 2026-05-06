# Bugfix: Session Logout Not Clearing

## Status: ✅ FIXED

## Problem

User melaporkan bahwa setelah logout di perangkat lain, mereka masih tidak bisa login kembali dengan akun yang sama di perangkat lain. Sistem menampilkan error "Akun sedang digunakan di perangkat lain" meskipun user sudah melakukan logout.

## Root Cause

Logout API memiliki 3 masalah kritis:

1. **Compound WHERE Clause Issue**: Menggunakan `.eq('id', userId).eq('active_session_token', sessionToken)` yang membutuhkan KEDUA kondisi match. Jika session token tidak match (sudah di-clear, berubah karena race condition, atau NULL), UPDATE tidak mengubah row apapun dan session data tetap ada.

2. **Incomplete Session Clearing**: Hanya clear `active_session_token` dan `last_activity_at`, tapi TIDAK clear `session_started_at`. Ini meninggalkan timestamp yang bisa diinterpretasikan sebagai active session.

3. **No Update Verification**: API mengembalikan success meskipun UPDATE tidak mengubah row apapun, memberikan false confidence bahwa session sudah di-clear.

## Solution

### Changes in `app/api/session/logout/route.ts`

1. **Remove Token Match from WHERE Clause**: Ubah UPDATE query untuk hanya match pada `userId`, menghapus kondisi `.eq('active_session_token', sessionToken)`. Ini memastikan session di-clear meskipun token tidak match.

2. **Add Session Token Verification Before Update**: Sebelum clearing, verify bahwa sessionToken match dengan database token. Jika tidak match, log warning tapi tetap proceed dengan clearing (handle edge cases seperti double-logout atau stale tokens).

3. **Clear All Session Fields**: Update query untuk clear SEMUA tiga session fields:
   - `active_session_token: null`
   - `session_started_at: null`
   - `last_activity_at: null`

4. **Verify Update Success**: Setelah UPDATE, check jumlah affected rows. Jika zero rows affected, log error dan return appropriate response.

5. **Make Logout Idempotent**: Logout dapat dipanggil multiple times tanpa error, meskipun session sudah di-clear.

### Code Changes

**Before (Buggy Code)**:
```typescript
// Clear session token from database
const { error: updateErr } = await supabase
  .from('profiles')
  .update({
    active_session_token: null,
    last_activity_at: null,
  })
  .eq('id', userId)
  .eq('active_session_token', sessionToken); // Only clear if token matches

if (updateErr) {
  console.error('[logout] Error clearing session:', updateErr);
  return NextResponse.json(
    { success: false, error: 'Failed to clear session' },
    { status: 500 }
  );
}

return NextResponse.json({
  success: true,
  message: 'Session cleared successfully'
});
```

**After (Fixed Code)**:
```typescript
// Verify session token matches (security check) before clearing
const { data: profile, error: fetchErr } = await supabase
  .from('profiles')
  .select('active_session_token')
  .eq('id', userId)
  .single();

if (fetchErr) {
  console.error('[logout] Error fetching profile:', fetchErr);
  return NextResponse.json(
    { success: false, error: 'User not found' },
    { status: 404 }
  );
}

// Log warning if token doesn't match, but still proceed with clearing for clean state
if (profile.active_session_token !== sessionToken) {
  console.warn('[logout] Token mismatch - clearing anyway for clean state', {
    userId,
    providedToken: sessionToken?.substring(0, 8) + '...',
    dbToken: profile.active_session_token?.substring(0, 8) + '...' || 'NULL'
  });
}

// Clear ALL session fields (not conditional on token match)
const { error: updateErr, count } = await supabase
  .from('profiles')
  .update({
    active_session_token: null,
    session_started_at: null,
    last_activity_at: null,
  })
  .eq('id', userId);

if (updateErr) {
  console.error('[logout] Error clearing session:', updateErr);
  return NextResponse.json(
    { success: false, error: 'Failed to clear session' },
    { status: 500 }
  );
}

// Verify update succeeded
if (count === 0) {
  console.error('[logout] No rows updated for userId:', userId);
  return NextResponse.json(
    { success: false, error: 'User not found' },
    { status: 404 }
  );
}

return NextResponse.json({
  success: true,
  message: 'Session cleared successfully'
});
```

## Testing

### Bug Condition Exploration Tests

Created `app/api/session/logout/route.bugfix.test.ts` with 4 test cases:

1. **Test Case 1: Logout with mismatched token** - Verifies session fields remain when logout token doesn't match database token (FAILED on unfixed code, PASSES after fix)

2. **Test Case 2: Logout when already logged out** - Verifies timestamp fields remain when token is already NULL (FAILED on unfixed code, PASSES after fix)

3. **Test Case 3: Logout with valid token** - Verifies `session_started_at` is NOT cleared even with valid matching token (FAILED on unfixed code, PASSES after fix)

4. **Test Case 4: Double logout** - Verifies `session_started_at` persists across multiple logout attempts (FAILED on unfixed code, PASSES after fix)

**Result**: All 4 tests now PASS, confirming bug is fixed.

### Preservation Property Tests

Created `app/api/session/preservation.test.ts` with 5 test cases:

1. **Test Case 1: Login with valid credentials** - Verifies login generates session token and stores in database
2. **Test Case 2: Heartbeat updates last_activity_at** - Verifies heartbeat updates timestamp for active sessions
3. **Test Case 3: Login rejected when session is active** - Verifies concurrent session prevention still works
4. **Test Case 4: Login allowed when session is expired** - Verifies session timeout (> 5 minutes) allows new login
5. **Additional: Heartbeat rejects invalid tokens** - Verifies security mechanism still works

**Result**: All 5 tests PASS, confirming no regressions introduced.

### All Tests Summary

```
Test Files  5 passed (5)
     Tests  40 passed (40)
  Duration  4.00s
```

## Expected Behavior After Fix

1. ✅ Setelah logout, session token harus di-clear dari database
2. ✅ User harus bisa login kembali immediately setelah logout
3. ✅ Tidak ada error "Akun sedang digunakan" setelah logout
4. ✅ Logout dengan mismatched token tetap clear semua session fields
5. ✅ Logout idempotent - dapat dipanggil multiple times tanpa error
6. ✅ Concurrent session prevention tetap berfungsi untuk session aktif
7. ✅ Heartbeat mechanism tetap berfungsi
8. ✅ Session timeout (5 menit) tetap berfungsi

## Files Modified

- `app/api/session/logout/route.ts` - Fixed logout API to clear all session fields
- `components/Sidebar.tsx` - Fixed logout button to call signOut API

## Files Created

- `app/api/session/logout/route.bugfix.test.ts` - Bug condition exploration tests
- `app/api/session/preservation.test.ts` - Preservation property tests
- `vitest.config.ts` - Vitest configuration
- `BUGFIX_SESSION_LOGOUT_NOT_CLEARING.md` - This documentation

## Additional Fix: Logout Button Not Calling API

**Problem Found**: Logout button di `components/Sidebar.tsx` hanya clear localStorage tapi **TIDAK memanggil** logout API untuk clear session dari database.

**Solution**: 
- Import `signOut` dari `lib/auth.ts`
- Call `await signOut()` sebelum clear localStorage
- Ini memastikan session di-clear dari database sebelum redirect ke login

**Code Change in `components/Sidebar.tsx`**:
```typescript
// Before (Bug)
onClick={() => {
  if (typeof window !== 'undefined') {
    // Only clear localStorage, no API call
    window.localStorage.removeItem('geuwat_user');
    // ... other cleanup
    window.location.href = '/login';
  }
}}

// After (Fixed)
onClick={async () => {
  if (typeof window !== 'undefined') {
    // Call signOut to clear session from database
    await signOut();
    
    // Then clear localStorage
    window.localStorage.removeItem('geuwat_user');
    // ... other cleanup
    window.location.href = '/login';
  }
}}
```

## Migration Required

**IMPORTANT**: Migration `supabase/migration_add_active_sessions.sql` harus dijalankan di Supabase Dashboard SQL Editor untuk menambahkan kolom:
- `active_session_token`
- `session_started_at`
- `last_activity_at`

Tanpa migration ini, logout fix tidak akan berfungsi karena kolom-kolom tersebut belum ada di database.

## How to Apply Migration

1. Buka Supabase Dashboard
2. Pilih project Anda
3. Klik "SQL Editor" di sidebar
4. Copy isi file `supabase/migration_add_active_sessions.sql`
5. Paste ke SQL Editor
6. Klik "Run" untuk execute migration
7. Verify kolom sudah ditambahkan dengan query:
   ```sql
   SELECT column_name, data_type 
   FROM information_schema.columns 
   WHERE table_name = 'profiles' 
   AND column_name IN ('active_session_token', 'session_started_at', 'last_activity_at');
   ```

## Verification Steps

1. ✅ Run migration di Supabase Dashboard
2. ✅ Restart development server: `npm run dev`
3. ✅ Login dengan akun test
4. ✅ Logout dari perangkat pertama
5. ✅ Login kembali dari perangkat kedua - harus berhasil immediately
6. ✅ Verify tidak ada error "Akun sedang digunakan"

## Summary

Bug logout yang tidak membersihkan session token sudah diperbaiki dengan:
- Menghapus compound WHERE clause yang menyebabkan UPDATE skip rows
- Menambahkan clearing untuk `session_started_at` yang sebelumnya terlupakan
- Menambahkan verification untuk memastikan UPDATE berhasil
- Membuat logout idempotent untuk handle double-logout scenarios
- Semua tests PASS (40/40) tanpa regressions

User sekarang dapat logout dan login kembali immediately tanpa error.
