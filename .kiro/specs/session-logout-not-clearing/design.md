# Session Logout Not Clearing Bugfix Design

## Overview

This bugfix addresses a critical issue where the logout functionality fails to properly clear session tokens from the database, preventing users from logging back in immediately after logout. The bug manifests when users logout from one device but the system still considers the session active, blocking subsequent login attempts with the error "Akun sedang digunakan di perangkat lain."

The fix ensures that logout operations reliably clear all session-related fields (`active_session_token`, `session_started_at`, `last_activity_at`) from the database, allowing immediate re-login while preserving the concurrent session prevention mechanism for truly active sessions.

## Glossary

- **Bug_Condition (C)**: The condition that triggers the bug - when a user calls logout API but the session token remains in the database
- **Property (P)**: The desired behavior when logout is called - all session fields should be cleared from database
- **Preservation**: Existing concurrent session prevention and heartbeat mechanisms that must remain unchanged
- **signOut**: The client-side function in `lib/auth.ts` that calls the logout API and clears localStorage
- **POST /api/session/logout**: The API endpoint in `app/api/session/logout/route.ts` that clears session from database
- **active_session_token**: Database field in `profiles` table that stores the current session token (NULL when logged out)
- **session_started_at**: Database field that stores when the current session began (should be NULL when logged out)
- **last_activity_at**: Database field that stores the last heartbeat timestamp (should be NULL when logged out)
- **Session Token Match**: The security check that verifies the provided session token matches the database before clearing

## Bug Details

### Bug Condition

The bug manifests when a user calls the logout API endpoint with valid credentials, but the session token is not cleared from the database. This occurs because the logout API uses a compound WHERE clause that requires BOTH `userId` AND `active_session_token` to match. If the token has already been cleared, changed, or is in an inconsistent state, the UPDATE statement affects zero rows, leaving the session data intact.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type { userId: string, sessionToken: string }
  OUTPUT: boolean
  
  RETURN input.userId IS_VALID
         AND input.sessionToken IS_VALID
         AND logoutAPICalled(input.userId, input.sessionToken)
         AND (databaseSessionToken != input.sessionToken 
              OR updateAffectedZeroRows()
              OR session_started_at NOT_CLEARED)
END FUNCTION
```

### Examples

- **Example 1**: User logs out from Device A with valid session token, but due to a race condition with heartbeat, the token in database has changed. Logout API returns success but doesn't clear the token. User tries to login from Device B and gets "Akun sedang digunakan di perangkat lain."

- **Example 2**: User logs out from Device A. The logout API clears `active_session_token` and `last_activity_at` but forgets to clear `session_started_at`. The login validation logic checks for active sessions and finds a non-NULL `session_started_at`, incorrectly treating it as an active session.

- **Example 3**: User's session token is NULL in database (already logged out), but they call logout again. The WHERE clause `eq('active_session_token', sessionToken)` matches zero rows, so the UPDATE doesn't execute. If `last_activity_at` or `session_started_at` still have values, the session appears active.

- **Edge Case**: User logs out with an expired or invalid session token. The logout should still clear all session fields for that userId to ensure clean state, but the current implementation skips the update if tokens don't match.

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- Concurrent session prevention must continue to work - if a user is actively logged in (last_activity < 5 minutes), login attempts from other devices must be rejected
- Heartbeat mechanism must continue to update `last_activity_at` for active sessions
- Login flow must continue to generate new session tokens and store them in database
- Session timeout logic (5 minute inactivity) must continue to allow new logins after timeout
- Security check that prevents clearing sessions with mismatched tokens should be preserved (but improved)

**Scope:**
All inputs that do NOT involve logout operations should be completely unaffected by this fix. This includes:
- Login operations with valid credentials
- Heartbeat updates for active sessions
- Session validation during concurrent login attempts
- Session timeout detection based on `last_activity_at`

## Hypothesized Root Cause

Based on the bug description and code analysis, the most likely issues are:

1. **Compound WHERE Clause Issue**: The logout API uses `.eq('id', userId).eq('active_session_token', sessionToken)` which requires BOTH conditions to match. If the session token doesn't match (already cleared, changed by race condition, or NULL), the UPDATE affects zero rows and session data remains.

2. **Incomplete Session Clearing**: The logout API clears `active_session_token` and `last_activity_at` but does NOT clear `session_started_at`. This leaves a timestamp that could be interpreted as an active session by validation logic.

3. **No Verification of Update Success**: The logout API doesn't check if the UPDATE statement actually affected any rows. It returns success even when zero rows were updated, giving false confidence that the session was cleared.

4. **Race Condition with Heartbeat**: If a heartbeat request updates `last_activity_at` at the same time as logout, the logout might clear the token but the heartbeat immediately updates the timestamp, leaving the session in an inconsistent state (no token but recent activity).

5. **Silent Failure on Token Mismatch**: When the session token doesn't match, the API should either return an error OR clear the session anyway (with appropriate logging), but currently it silently succeeds without clearing anything.

## Correctness Properties

Property 1: Bug Condition - Logout Clears All Session Fields

_For any_ logout request where a valid userId is provided (regardless of whether the sessionToken matches the database), the fixed logout API SHALL clear all session-related fields (`active_session_token`, `session_started_at`, `last_activity_at`) to NULL for that userId, ensuring the user can immediately login again.

**Validates: Requirements 2.1, 2.2, 2.3, 2.4**

Property 2: Preservation - Concurrent Session Prevention

_For any_ login attempt where the target account has an active session (non-NULL `active_session_token` AND `last_activity_at` within last 5 minutes), the fixed code SHALL produce exactly the same behavior as the original code, rejecting the login with error "Akun sedang digunakan di perangkat lain" and preserving the concurrent session prevention mechanism.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct:

**File**: `app/api/session/logout/route.ts`

**Function**: `POST` handler

**Specific Changes**:

1. **Remove Token Match from WHERE Clause**: Change the UPDATE query to only match on `userId`, removing the `.eq('active_session_token', sessionToken)` condition. This ensures the session is cleared even if the token doesn't match.

2. **Add Session Token Verification Before Update**: Before clearing, verify that the provided sessionToken matches the database token. If it doesn't match, log a warning but still proceed with clearing (this handles edge cases like double-logout or stale tokens).

3. **Clear All Session Fields**: Update the query to clear ALL three session fields:
   - `active_session_token: null`
   - `session_started_at: null`
   - `last_activity_at: null`

4. **Verify Update Success**: After the UPDATE, check the number of affected rows. If zero rows were affected, log an error and return appropriate response.

5. **Add Idempotency**: Make logout idempotent - calling logout multiple times should succeed without error, even if the session is already cleared.

**Pseudocode for Fixed Logic**:
```typescript
// Verify session token matches (security check)
const profile = await fetchProfile(userId);
if (profile.active_session_token !== sessionToken) {
  console.warn('[logout] Token mismatch - clearing anyway for clean state');
}

// Clear ALL session fields (not conditional on token match)
const result = await supabase
  .from('profiles')
  .update({
    active_session_token: null,
    session_started_at: null,
    last_activity_at: null,
  })
  .eq('id', userId);

// Verify update succeeded
if (result.count === 0) {
  console.error('[logout] No rows updated for userId:', userId);
  return { success: false, error: 'User not found' };
}

return { success: true };
```

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bug on unfixed code, then verify the fix works correctly and preserves existing behavior.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bug BEFORE implementing the fix. Confirm or refute the root cause analysis. If we refute, we will need to re-hypothesize.

**Test Plan**: Write tests that simulate logout scenarios where the session token doesn't match or is already cleared. Run these tests on the UNFIXED code to observe failures and understand the root cause.

**Test Cases**:
1. **Mismatched Token Test**: Call logout with a sessionToken that doesn't match the database. Verify that session fields remain in database (will fail on unfixed code - session not cleared).

2. **Already Logged Out Test**: Call logout when `active_session_token` is already NULL. Verify that `session_started_at` and `last_activity_at` are still present (will fail on unfixed code - fields not cleared).

3. **Race Condition Test**: Simulate logout and heartbeat happening simultaneously. Verify that session is fully cleared after logout completes (will fail on unfixed code - inconsistent state).

4. **Double Logout Test**: Call logout twice in succession. Verify that second logout succeeds and all fields are NULL (may fail on unfixed code - second logout might error or leave stale data).

**Expected Counterexamples**:
- Session fields remain in database when token doesn't match
- `session_started_at` not cleared even when `active_session_token` is cleared
- UPDATE affects zero rows but API returns success
- Possible causes: compound WHERE clause, incomplete field clearing, no verification of update success

### Fix Checking

**Goal**: Verify that for all inputs where the bug condition holds, the fixed function produces the expected behavior.

**Pseudocode:**
```
FOR ALL input WHERE isBugCondition(input) DO
  result := logoutAPI_fixed(input.userId, input.sessionToken)
  profile := fetchProfile(input.userId)
  ASSERT profile.active_session_token IS NULL
  ASSERT profile.session_started_at IS NULL
  ASSERT profile.last_activity_at IS NULL
  ASSERT result.success = true
END FOR
```

### Preservation Checking

**Goal**: Verify that for all inputs where the bug condition does NOT hold, the fixed function produces the same result as the original function.

**Pseudocode:**
```
FOR ALL input WHERE NOT isBugCondition(input) DO
  ASSERT loginFlow_original(input) = loginFlow_fixed(input)
  ASSERT heartbeatFlow_original(input) = heartbeatFlow_fixed(input)
  ASSERT concurrentLoginPrevention_original(input) = concurrentLoginPrevention_fixed(input)
END FOR
```

**Testing Approach**: Property-based testing is recommended for preservation checking because:
- It generates many test cases automatically across the input domain
- It catches edge cases that manual unit tests might miss
- It provides strong guarantees that behavior is unchanged for all non-logout operations

**Test Plan**: Observe behavior on UNFIXED code first for login, heartbeat, and concurrent session prevention, then write property-based tests capturing that behavior.

**Test Cases**:
1. **Login Flow Preservation**: Observe that login with valid credentials generates session token and stores it in database. Verify this continues to work after fix.

2. **Heartbeat Preservation**: Observe that heartbeat updates `last_activity_at` for active sessions. Verify this continues to work after fix.

3. **Concurrent Session Prevention Preservation**: Observe that login is rejected when session is active (last_activity < 5 minutes). Verify this continues to work after fix.

4. **Session Timeout Preservation**: Observe that login is allowed when session is expired (last_activity > 5 minutes). Verify this continues to work after fix.

### Unit Tests

- Test logout with valid matching session token - verify all fields cleared
- Test logout with mismatched session token - verify all fields still cleared (with warning logged)
- Test logout when already logged out (NULL token) - verify idempotency
- Test logout with invalid userId - verify appropriate error response
- Test that logout doesn't affect other users' sessions

### Property-Based Tests

- Generate random session states (active, expired, NULL) and verify logout always clears all fields
- Generate random sequences of login/logout/heartbeat operations and verify session state consistency
- Test that concurrent logout and heartbeat operations don't leave inconsistent state
- Verify that after any logout operation, immediate login is always possible

### Integration Tests

- Test full flow: login → logout → immediate login from different device (should succeed)
- Test full flow: login → logout → logout again (should be idempotent)
- Test full flow: login Device A → login Device B (should fail) → logout Device A → login Device B (should succeed)
- Test that logout from one account doesn't affect other accounts' sessions
- Test that session monitor correctly detects cleared sessions and redirects to login
