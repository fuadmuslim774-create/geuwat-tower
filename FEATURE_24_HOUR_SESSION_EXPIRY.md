# Feature: 24-Hour Session Expiry

## Status: ✅ IMPLEMENTED

## Overview

Sistem session management sekarang memiliki **automatic 24-hour expiry**. Session akan otomatis kadaluarsa dan di-clear dari database setelah 24 jam dari `session_started_at`, bahkan jika user masih aktif.

## Why 24-Hour Expiry?

Tanpa expiry time yang pasti, session bisa tetap aktif selama user terus melakukan heartbeat (setiap 2 menit). Ini bisa menyebabkan:
- Session yang tidak pernah expire jika user terus aktif
- Security risk jika session token dicuri
- Database penuh dengan session lama yang tidak pernah di-clear

Dengan 24-hour expiry:
- ✅ Session pasti expire setelah 24 jam, paksa user login ulang
- ✅ Automatic cleanup untuk session lama
- ✅ Better security - limit session lifetime
- ✅ Prevent indefinite session hijacking

## How It Works

### 1. Session Expiry Check on Login

**File**: `app/api/login/route.ts`

Saat user login, sistem check apakah ada session yang sudah expire (>= 24 jam):

```typescript
// Check if session has expired (24 hours from session_started_at)
if (existingProfile?.active_session_token && existingProfile?.session_started_at) {
  const sessionStarted = new Date(existingProfile.session_started_at).getTime();
  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;
  
  if (now - sessionStarted >= twentyFourHours) {
    // Session expired (24 hours), auto-clear it
    console.log('[login] Session expired (24 hours), clearing session');
    await supabase
      .from('profiles')
      .update({
        active_session_token: null,
        session_started_at: null,
        last_activity_at: null,
      })
      .eq('id', cred.account_id);
    
    // Continue with login (session cleared)
  }
}
```

**Behavior**:
- Jika session >= 24 jam → Auto-clear dan allow login
- Jika session < 24 jam dan active (last_activity < 5 min) → Reject login dengan "Akun sedang digunakan"
- Jika session < 24 jam tapi inactive (last_activity >= 5 min) → Allow login

### 2. Session Expiry Check on Heartbeat

**File**: `app/api/session/heartbeat/route.ts`

Setiap heartbeat (2 menit), sistem check apakah session sudah expire:

```typescript
// Check if session has expired (24 hours from session_started_at)
if (profile?.session_started_at) {
  const sessionStarted = new Date(profile.session_started_at).getTime();
  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;
  
  if (now - sessionStarted >= twentyFourHours) {
    // Session expired (24 hours), auto-clear it and reject heartbeat
    console.log('[heartbeat] Session expired (24 hours), clearing session');
    await supabase
      .from('profiles')
      .update({
        active_session_token: null,
        session_started_at: null,
        last_activity_at: null,
      })
      .eq('id', userId);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Session expired (24 hours) - please login again',
        sessionValid: false,
        code: 'SESSION_EXPIRED'
      },
      { status: 401 }
    );
  }
}
```

**Behavior**:
- Jika session >= 24 jam → Auto-clear, reject heartbeat dengan code `SESSION_EXPIRED`
- Jika session < 24 jam → Continue dengan update `last_activity_at`

### 3. Client-Side Handling

**File**: `lib/sessionMonitor.ts`

Session monitor mendeteksi `SESSION_EXPIRED` error code dan show user-friendly message:

```typescript
if (!response.ok || !data.sessionValid) {
  // Check if session expired (24 hours)
  if (data.code === 'SESSION_EXPIRED') {
    handleSessionExpired(); // Show: "Sesi Anda telah kadaluarsa (24 jam)"
  } else {
    handleSessionInvalid(); // Show: "Akun sedang digunakan di perangkat lain"
  }
}
```

**User Experience**:
- Session expired → Alert: "Sesi Anda telah kadaluarsa (24 jam). Silakan login kembali."
- Session invalid → Alert: "Akun Anda sedang digunakan di perangkat lain. Anda akan diarahkan ke halaman login."

## Session Timeouts Summary

| Timeout Type | Duration | Trigger | Behavior |
|--------------|----------|---------|----------|
| **Session Expiry** | 24 hours | From `session_started_at` | Force logout, clear session, require re-login |
| **Activity Timeout** | 5 minutes | From `last_activity_at` | Allow new login (session considered inactive) |
| **Heartbeat Interval** | 2 minutes | Client-side timer | Keep session alive, update `last_activity_at` |

## User Scenarios

### Scenario 1: User Active for 24+ Hours

1. User login at 08:00 (Day 1)
2. User terus aktif, heartbeat setiap 2 menit
3. At 08:00 (Day 2) - 24 hours later
4. Next heartbeat → Session expired
5. User sees alert: "Sesi Anda telah kadaluarsa (24 jam)"
6. Redirect to login page
7. User must login again

### Scenario 2: User Inactive for 5+ Minutes (Before 24 Hours)

1. User login at 08:00
2. User inactive, no heartbeat for 6 minutes
3. Another device tries to login at 08:06
4. Login succeeds (session considered inactive)
5. Original device's next heartbeat → Session invalid
6. User sees alert: "Akun sedang digunakan di perangkat lain"

### Scenario 3: User Tries to Login After 24 Hours

1. User login at 08:00 (Day 1)
2. User closes browser (no logout)
3. User tries to login at 09:00 (Day 2) - 25 hours later
4. Login API checks session age → 25 hours (expired)
5. Auto-clear expired session
6. Login succeeds immediately (no "Akun sedang digunakan" error)

### Scenario 4: User Active, Then Inactive, Then Active Again

1. User login at 08:00
2. User active until 10:00 (2 hours)
3. User inactive from 10:00 to 10:06 (6 minutes)
4. User active again at 10:06
5. Session still valid (< 24 hours from 08:00)
6. Heartbeat succeeds, session continues

## Configuration

### Change Session Expiry Duration

**File**: `app/api/login/route.ts` and `app/api/session/heartbeat/route.ts`

```typescript
// Current: 24 hours
const twentyFourHours = 24 * 60 * 60 * 1000;

// Change to 12 hours:
const twelveHours = 12 * 60 * 60 * 1000;

// Change to 48 hours:
const fortyEightHours = 48 * 60 * 60 * 1000;
```

### Change Activity Timeout

**File**: `app/api/login/route.ts`

```typescript
// Current: 5 minutes
const fiveMinutes = 5 * 60 * 1000;

// Change to 10 minutes:
const tenMinutes = 10 * 60 * 1000;
```

### Change Heartbeat Interval

**File**: `lib/sessionMonitor.ts`

```typescript
// Current: 2 minutes
setInterval(..., 2 * 60 * 1000);

// Change to 1 minute:
setInterval(..., 1 * 60 * 1000);
```

## Testing

### Test Case 1: Session Expires After 24 Hours

1. Login with test account
2. Manually update `session_started_at` in database to 25 hours ago:
   ```sql
   UPDATE profiles 
   SET session_started_at = NOW() - INTERVAL '25 hours'
   WHERE id = 'user-id';
   ```
3. Wait for next heartbeat (2 minutes) or trigger manually
4. **Expected**: Alert "Sesi Anda telah kadaluarsa (24 jam)"
5. **Expected**: Redirect to login page
6. **Expected**: Session cleared from database

### Test Case 2: Login Clears Expired Session

1. Login with test account
2. Manually update `session_started_at` to 25 hours ago
3. Try to login from another device/browser
4. **Expected**: Login succeeds immediately (no "Akun sedang digunakan" error)
5. **Expected**: Old session cleared, new session created

### Test Case 3: Session Valid Before 24 Hours

1. Login with test account
2. Keep browser open for 23 hours
3. Heartbeat continues every 2 minutes
4. **Expected**: Session remains valid
5. **Expected**: No alerts or redirects
6. At 24 hours + 1 heartbeat:
7. **Expected**: Session expires, alert shown

## Database Schema

No changes required. Uses existing columns:
- `active_session_token` - Session token (NULL when logged out)
- `session_started_at` - When session started (used for 24-hour expiry check)
- `last_activity_at` - Last heartbeat timestamp (used for 5-minute activity check)

## Security Benefits

1. **Limited Session Lifetime**: Even if session token is stolen, it expires after 24 hours
2. **Automatic Cleanup**: Old sessions are automatically cleared, preventing database bloat
3. **Force Re-authentication**: Users must re-login every 24 hours, ensuring fresh credentials
4. **Prevent Indefinite Hijacking**: Stolen tokens can't be used indefinitely

## Files Modified

- `app/api/login/route.ts` - Added 24-hour expiry check on login
- `app/api/session/heartbeat/route.ts` - Added 24-hour expiry check on heartbeat
- `lib/sessionMonitor.ts` - Added SESSION_EXPIRED handling with user-friendly message

## Summary

✅ **Session Expiry**: 24 hours from `session_started_at`
✅ **Activity Timeout**: 5 minutes from `last_activity_at`
✅ **Heartbeat Interval**: 2 minutes
✅ **Auto-Cleanup**: Expired sessions automatically cleared
✅ **User-Friendly**: Clear messages for expired vs invalid sessions
✅ **Security**: Limited session lifetime prevents indefinite hijacking

Sessions sekarang memiliki lifetime yang pasti (24 jam) dan akan otomatis expire, memaksa user untuk login ulang secara berkala.
