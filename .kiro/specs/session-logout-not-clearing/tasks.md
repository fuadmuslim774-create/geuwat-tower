# Implementation Plan

- [x] 1. Write bug condition exploration test
  - **Property 1: Bug Condition** - Logout Clears All Session Fields
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate the bug exists
  - **Scoped PBT Approach**: Test concrete failing cases - logout with mismatched token, already logged out state, and race conditions
  - Test that logout API clears ALL session fields (`active_session_token`, `session_started_at`, `last_activity_at`) to NULL for any valid userId, regardless of whether sessionToken matches database
  - Test Case 1: Logout with mismatched token - verify session fields remain in database (bug)
  - Test Case 2: Logout when already logged out (NULL token) - verify `session_started_at` and `last_activity_at` still present (bug)
  - Test Case 3: Logout with valid token - verify `session_started_at` is NOT cleared (bug)
  - Run test on UNFIXED code in `app/api/session/logout/route.ts`
  - **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves the bug exists)
  - Document counterexamples found to understand root cause
  - Mark task complete when test is written, run, and failure is documented
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [x] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Concurrent Session Prevention
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for non-buggy inputs (login, heartbeat, concurrent session prevention)
  - Test Case 1: Login with valid credentials generates session token and stores in database
  - Test Case 2: Heartbeat updates `last_activity_at` for active sessions
  - Test Case 3: Login is rejected when session is active (last_activity < 5 minutes) with error "Akun sedang digunakan di perangkat lain"
  - Test Case 4: Login is allowed when session is expired (last_activity > 5 minutes)
  - Write property-based tests capturing observed behavior patterns from Preservation Requirements
  - Property-based testing generates many test cases for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 3. Fix for session logout not clearing

  - [x] 3.1 Implement the fix in `app/api/session/logout/route.ts`
    - Remove `.eq('active_session_token', sessionToken)` from WHERE clause to ensure session is cleared even if token doesn't match
    - Add session token verification BEFORE update - if token doesn't match, log warning but still proceed with clearing
    - Clear ALL three session fields in UPDATE query: `active_session_token: null`, `session_started_at: null`, `last_activity_at: null`
    - Verify UPDATE success by checking affected rows count - if zero rows affected, log error and return appropriate response
    - Make logout idempotent - calling logout multiple times should succeed without error
    - _Bug_Condition: isBugCondition(input) where input.userId IS_VALID AND input.sessionToken IS_VALID AND logoutAPICalled(input.userId, input.sessionToken) AND (databaseSessionToken != input.sessionToken OR updateAffectedZeroRows() OR session_started_at NOT_CLEARED)_
    - _Expected_Behavior: For any logout request where valid userId is provided (regardless of sessionToken match), all session fields (active_session_token, session_started_at, last_activity_at) SHALL be cleared to NULL_
    - _Preservation: Concurrent session prevention (3.1), login flow (3.2), heartbeat mechanism (3.3), session timeout (3.4) must remain unchanged_
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 3.5_

  - [x] 3.2 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Logout Clears All Session Fields
    - **IMPORTANT**: Re-run the SAME test from task 1 - do NOT write a new test
    - The test from task 1 encodes the expected behavior
    - When this test passes, it confirms the expected behavior is satisfied
    - Run bug condition exploration test from step 1
    - **EXPECTED OUTCOME**: Test PASSES (confirms bug is fixed)
    - Verify that logout with mismatched token now clears all session fields
    - Verify that logout when already logged out now clears remaining fields
    - Verify that `session_started_at` is now properly cleared
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 3.3 Verify preservation tests still pass
    - **Property 2: Preservation** - Concurrent Session Prevention
    - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
    - Run preservation property tests from step 2
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions)
    - Verify login flow still works correctly
    - Verify heartbeat still updates last_activity_at
    - Verify concurrent session prevention still rejects duplicate logins
    - Verify session timeout still allows login after expiry
    - Confirm all tests still pass after fix (no regressions)
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 4. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
