# Feature: Session Management - Prevent Concurrent Logins

## Status: ✅ IMPLEMENTED

## Overview

Sistem untuk memastikan satu akun hanya bisa dimainkan oleh satu user pada satu waktu. Jika ada user lain yang login dengan akun yang sama, user pertama akan di-kick dan diarahkan ke halaman login.

## How It Works

### 1. Login Flow

**When user logs in:**
1. System checks if account has active session (last activity < 5 minutes)
2. If active session exists → **Login ditolak** dengan pesan error
3. If no active session → Generate session token dan simpan ke database
4. Session token disimpan di localStorage client

**Error Response:**
```json
{
  "success": false,
  "error": "Akun sedang digunakan di perangkat lain. Silakan coba akun yang lain atau tunggu beberapa saat.",
  "code": "ACCOUNT_IN_USE"
}
```

### 2. Session Monitoring

**Heartbeat System:**
- Client sends heartbeat every **2 minutes** to `/api/session/heartbeat`
- Heartbeat updates `last_activity_at` timestamp in database
- If session token doesn't match → User is kicked

**Session Validation:**
- Server checks if `active_session_token` matches
- If token mismatch → Session invalid
- Client receives `sessionValid: false` → Redirect to login

### 3. Session Timeout

**Automatic Timeout:**
- If no heartbeat for **5 minutes** → Session considered inactive
- New login allowed after 5 minutes of inactivity
- Prevents permanent lockout if user closes browser without logout

### 4. Logout Flow

**When user logs out:**
1. Client calls `/api/session/logout` with session token
2. Server clears `active_session_token` from database
3. Account immediately available for new login

## Database Schema

### Migration: `migration_add_active_sessions.sql`

```sql
alter table public.profiles
add column if not exists active_session_token text null,
add column if not exists session_started_at timestamptz null,
add column if not exists last_activity_at timestamptz null;
```

**Fields:**
- `active_session_token`: Unique token for current session (null if not active)
- `session_started_at`: When session started
- `last_activity_at`: Last heartbeat timestamp

## API Endpoints

### POST `/api/login`

**Changes:**
- Checks for active session before allowing login
- Generates and stores session token
- Returns session token in response

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "sessionToken": "hex-string",
    ...
  }
}
```

### POST `/api/session/heartbeat`

**Purpose:** Keep session alive and validate session token

**Request:**
```json
{
  "userId": "uuid",
  "sessionToken": "hex-string"
}
```

**Response (Valid):**
```json
{
  "success": true,
  "sessionValid": true,
  "message": "Session refreshed"
}
```

**Response (Invalid):**
```json
{
  "success": false,
  "sessionValid": false,
  "error": "Session invalid - account is being used elsewhere",
  "code": "SESSION_INVALID"
}
```

### POST `/api/session/logout`

**Purpose:** Clear session from database

**Request:**
```json
{
  "userId": "uuid",
  "sessionToken": "hex-string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Session cleared successfully"
}
```

## Client-Side Implementation

### Session Monitor (`lib/sessionMonitor.ts`)

**Functions:**
- `startSessionMonitor()` - Start heartbeat interval
- `stopSessionMonitor()` - Stop heartbeat interval
- `handleSessionInvalid()` - Kick user and redirect to login

**Integration:**
- Automatically started in `AppShell` component
- Runs on all authenticated pages
- Stops on component unmount

### User Flow

**Scenario 1: Normal Usage**
1. User A logs in → Session token generated
2. Heartbeat sent every 2 minutes
3. User A plays game normally
4. User A logs out → Session cleared

**Scenario 2: Concurrent Login Attempt**
1. User A logs in on Device 1 → Session active
2. User B tries to login with same account on Device 2
3. Login fails with error: "Akun sedang digunakan"
4. User B must wait or use different account

**Scenario 3: Session Takeover**
1. User A logs in on Device 1 → Session active
2. After 5 minutes of inactivity (no heartbeat)
3. User B can now login on Device 2 → New session
4. User A's next heartbeat fails → Kicked to login

**Scenario 4: Force Logout**
1. User A logs in on Device 1 → Session active
2. User A logs in again on Device 2 (after 5 min timeout)
3. Device 1's next heartbeat fails → Kicked to login
4. Alert shown: "Akun Anda sedang digunakan di perangkat lain"

## Configuration

### Timeouts

**Session Timeout:** 5 minutes
- Defined in: `app/api/login/route.ts`
- Change: `const fiveMinutes = 5 * 60 * 1000;`

**Heartbeat Interval:** 2 minutes
- Defined in: `lib/sessionMonitor.ts`
- Change: `setInterval(..., 2 * 60 * 1000);`

**Recommendation:**
- Heartbeat interval should be < Session timeout
- Current: 2 min heartbeat, 5 min timeout (safe margin)

## Testing

### Test Case 1: Prevent Concurrent Login

1. Login with account A on Browser 1
2. Try to login with account A on Browser 2 (within 5 minutes)
3. **Expected:** Login fails with error message
4. **Actual:** ✅ Error: "Akun sedang digunakan di perangkat lain"

### Test Case 2: Session Timeout

1. Login with account A on Browser 1
2. Wait 6 minutes (no activity)
3. Try to login with account A on Browser 2
4. **Expected:** Login succeeds
5. **Actual:** ✅ Login successful, new session created

### Test Case 3: Session Kick

1. Login with account A on Browser 1
2. Wait 6 minutes
3. Login with account A on Browser 2
4. Go back to Browser 1 and interact
5. **Expected:** Browser 1 shows alert and redirects to login
6. **Actual:** ✅ Alert shown, redirected to login

### Test Case 4: Normal Logout

1. Login with account A
2. Play game for a while
3. Click logout
4. Try to login again immediately
5. **Expected:** Login succeeds immediately
6. **Actual:** ✅ Login successful

## Files Created/Modified

### New Files:
- `supabase/migration_add_active_sessions.sql` - Database migration
- `app/api/session/heartbeat/route.ts` - Heartbeat API endpoint
- `app/api/session/logout/route.ts` - Logout API endpoint
- `lib/sessionMonitor.ts` - Client-side session monitoring
- `FEATURE_SESSION_MANAGEMENT.md` - This documentation

### Modified Files:
- `app/api/login/route.ts` - Added session token generation and validation
- `lib/auth.ts` - Added sessionToken to User type, updated signOut
- `components/AppShell.tsx` - Integrated session monitor

## Security Considerations

### Session Token Security

**Token Generation:**
- Uses `crypto.randomBytes(32)` for secure random tokens
- 64-character hex string (256 bits of entropy)
- Cryptographically secure

**Token Storage:**
- Stored in localStorage (client-side)
- Stored in database (server-side)
- Not exposed in URLs or cookies

**Token Validation:**
- Every heartbeat validates token match
- Token mismatch = immediate kick
- No token reuse after logout

### Attack Vectors

**Scenario: Attacker steals session token**
- Attacker can impersonate user until next heartbeat
- Original user will be kicked on next heartbeat
- Max window: 2 minutes (heartbeat interval)
- Mitigation: Use HTTPS, secure localStorage

**Scenario: Attacker tries to brute force**
- 256-bit token = 2^256 possible values
- Practically impossible to guess
- Rate limiting recommended (not implemented)

**Scenario: User shares account**
- System prevents concurrent usage
- Users must coordinate or wait for timeout
- Intended behavior (not a vulnerability)

## Future Improvements

### Potential Enhancements:

1. **Rate Limiting**
   - Limit login attempts per IP
   - Prevent brute force attacks

2. **Session History**
   - Log all login attempts
   - Show "last login" information
   - Detect suspicious activity

3. **Device Fingerprinting**
   - Track device information
   - Allow trusted devices
   - Require verification for new devices

4. **Graceful Handoff**
   - Allow user to "kick" other session
   - Confirmation dialog before takeover
   - Notify other device before kick

5. **Admin Dashboard**
   - View active sessions
   - Force logout users
   - Monitor concurrent login attempts

## Troubleshooting

### Issue: User can't login (always "account in use")

**Possible Causes:**
1. Previous session didn't logout properly
2. Heartbeat still running in background tab
3. Session timeout not reached (< 5 minutes)

**Solutions:**
1. Wait 5 minutes for session timeout
2. Check database: `SELECT active_session_token, last_activity_at FROM profiles WHERE id = 'user-id'`
3. Manually clear session: `UPDATE profiles SET active_session_token = NULL WHERE id = 'user-id'`

### Issue: User gets kicked randomly

**Possible Causes:**
1. Network issues preventing heartbeat
2. Browser tab suspended (mobile)
3. Another device logged in

**Solutions:**
1. Check browser console for heartbeat errors
2. Check network connectivity
3. Verify no other devices using same account

### Issue: Heartbeat not working

**Possible Causes:**
1. Session monitor not started
2. JavaScript error in sessionMonitor.ts
3. API endpoint not responding

**Solutions:**
1. Check browser console for errors
2. Verify AppShell component mounted
3. Test API endpoint manually: `POST /api/session/heartbeat`

## Migration Instructions

### Step 1: Apply Database Migration

```bash
# Open Supabase Dashboard → SQL Editor
# Copy contents of migration_add_active_sessions.sql
# Run the migration
```

### Step 2: Restart Development Server

```bash
# Stop current server
# Start again to load new API endpoints
npm run dev
```

### Step 3: Test Login Flow

1. Login with test account
2. Check browser console for session monitor logs
3. Try concurrent login from another browser
4. Verify error message appears

### Step 4: Monitor Production

1. Check Supabase logs for errors
2. Monitor `last_activity_at` timestamps
3. Verify sessions are being cleared on logout

## Summary

✅ **Implemented:**
- Session token generation on login
- Concurrent login prevention
- Heartbeat system (2 min interval)
- Session timeout (5 min inactivity)
- Automatic kick on session invalid
- Clean logout with session clearing

✅ **Benefits:**
- Prevents account sharing
- Ensures fair gameplay
- Protects user accounts
- Automatic cleanup of stale sessions

✅ **User Experience:**
- Clear error messages
- Automatic session management
- No manual intervention needed
- Graceful timeout handling
