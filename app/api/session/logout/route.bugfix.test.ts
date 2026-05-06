import { describe, expect, it, beforeEach, afterEach } from 'vitest';
import { getSupabaseServerClient } from '../../../../lib/supabase/server';

/**
 * Bug Condition Exploration Test for Session Logout Not Clearing
 * 
 * **Validates: Requirements 2.1, 2.2, 2.3, 2.4**
 * 
 * This test encodes the EXPECTED behavior for the logout API:
 * - ALL session fields (active_session_token, session_started_at, last_activity_at) 
 *   MUST be cleared to NULL when logout is called
 * - This should happen regardless of whether the sessionToken matches the database
 * 
 * CRITICAL: This test MUST FAIL on unfixed code - failure confirms the bug exists.
 * When this test passes after implementing the fix, it confirms the bug is resolved.
 */

/**
 * Helper function to determine if a logout scenario meets the bug condition
 */
function isBugCondition(input: {
  userId: string;
  sessionToken: string;
  databaseSessionToken: string | null;
  sessionStartedAt: string | null;
  lastActivityAt: string | null;
}): boolean {
  // Bug condition: logout is called with valid userId and sessionToken,
  // but session fields are not fully cleared from database
  return (
    input.userId !== null &&
    input.sessionToken !== null &&
    (input.databaseSessionToken !== null ||
      input.sessionStartedAt !== null ||
      input.lastActivityAt !== null)
  );
}

/**
 * Test helper: Create a test user with session data
 */
async function createTestUser(
  userId: string,
  sessionToken: string | null,
  sessionStartedAt: string | null,
  lastActivityAt: string | null
) {
  const supabase = getSupabaseServerClient();
  if (!supabase) throw new Error('Supabase not configured');

  // Create account
  const { error: accountError } = await supabase
    .from('accounts')
    .insert({ id: userId });

  if (accountError) throw accountError;

  // Create profile with session data
  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      username: `testuser_${userId.slice(0, 8)}`,
      avatar_id: 'chibi1',
      batch_id: 'gen_1',
      active_session_token: sessionToken,
      session_started_at: sessionStartedAt,
      last_activity_at: lastActivityAt,
    });

  if (profileError) throw profileError;
}

/**
 * Test helper: Clean up test user
 */
async function cleanupTestUser(userId: string) {
  const supabase = getSupabaseServerClient();
  if (!supabase) return;

  // Delete account (cascades to profile)
  await supabase.from('accounts').delete().eq('id', userId);
}

/**
 * Test helper: Fetch profile session data
 */
async function getProfileSessionData(userId: string) {
  const supabase = getSupabaseServerClient();
  if (!supabase) throw new Error('Supabase not configured');

  const { data, error } = await supabase
    .from('profiles')
    .select('active_session_token, session_started_at, last_activity_at')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

/**
 * Test helper: Call logout API
 */
async function callLogoutAPI(userId: string, sessionToken: string) {
  const response = await fetch('http://localhost:4015/api/session/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, sessionToken }),
  });

  return response.json();
}

describe('Bug Condition Exploration: Session Logout Not Clearing', () => {
  const testUserIds: string[] = [];

  afterEach(async () => {
    // Clean up all test users
    for (const userId of testUserIds) {
      await cleanupTestUser(userId);
    }
    testUserIds.length = 0;
  });

  /**
   * Property 1: Bug Condition - Logout Clears All Session Fields
   * 
   * Test Case 1: Logout with mismatched token
   * 
   * SCENARIO: User calls logout with a sessionToken that doesn't match the database.
   * This can happen due to race conditions, stale tokens, or double-logout scenarios.
   * 
   * EXPECTED BEHAVIOR: All session fields should be cleared to NULL regardless of token match.
   * 
   * EXPECTED OUTCOME ON UNFIXED CODE: This test FAILS because the current implementation
   * uses `.eq('active_session_token', sessionToken)` in the WHERE clause, which causes
   * the UPDATE to affect zero rows when tokens don't match, leaving session data intact.
   */
  it('Test Case 1: Logout with mismatched token should clear all session fields', async () => {
    const userId = '11111111-1111-1111-1111-111111111111';
    testUserIds.push(userId);

    const databaseToken = 'database-token-abc123';
    const clientToken = 'client-token-xyz789'; // Different from database
    const sessionStartedAt = new Date().toISOString();
    const lastActivityAt = new Date().toISOString();

    // Create user with active session
    await createTestUser(userId, databaseToken, sessionStartedAt, lastActivityAt);

    // Verify bug condition
    const beforeData = await getProfileSessionData(userId);
    expect(
      isBugCondition({
        userId,
        sessionToken: clientToken,
        databaseSessionToken: beforeData.active_session_token,
        sessionStartedAt: beforeData.session_started_at,
        lastActivityAt: beforeData.last_activity_at,
      })
    ).toBe(true);

    console.log('Test Case 1: Logout with mismatched token');
    console.log(`  Database token: "${databaseToken}"`);
    console.log(`  Client token: "${clientToken}"`);
    console.log(`  Before logout:`, beforeData);

    // Call logout API with mismatched token
    const result = await callLogoutAPI(userId, clientToken);

    // Fetch session data after logout
    const afterData = await getProfileSessionData(userId);

    console.log(`  After logout:`, afterData);
    console.log(`  API response:`, result);

    // Document the counterexample
    if (
      afterData.active_session_token !== null ||
      afterData.session_started_at !== null ||
      afterData.last_activity_at !== null
    ) {
      console.log(`  ❌ BUG CONFIRMED: Session fields not cleared despite logout`);
      console.log(`     - active_session_token: ${afterData.active_session_token} (should be NULL)`);
      console.log(`     - session_started_at: ${afterData.session_started_at} (should be NULL)`);
      console.log(`     - last_activity_at: ${afterData.last_activity_at} (should be NULL)`);
    }

    // This assertion will FAIL on unfixed code, confirming the bug exists
    expect(afterData.active_session_token).toBeNull();
    expect(afterData.session_started_at).toBeNull();
    expect(afterData.last_activity_at).toBeNull();
  });

  /**
   * Property 1: Bug Condition - Logout Clears All Session Fields
   * 
   * Test Case 2: Logout when already logged out (NULL token)
   * 
   * SCENARIO: User calls logout when active_session_token is already NULL.
   * This can happen with double-logout or when session was cleared by another process.
   * 
   * EXPECTED BEHAVIOR: All remaining session fields (session_started_at, last_activity_at)
   * should be cleared to NULL to ensure clean state.
   * 
   * EXPECTED OUTCOME ON UNFIXED CODE: This test FAILS because the WHERE clause
   * `.eq('active_session_token', sessionToken)` matches zero rows when the database
   * token is NULL, so the UPDATE doesn't execute and timestamps remain.
   */
  it('Test Case 2: Logout when already logged out should clear remaining fields', async () => {
    const userId = '22222222-2222-2222-2222-222222222222';
    testUserIds.push(userId);

    const clientToken = 'client-token-abc123';
    const sessionStartedAt = new Date().toISOString();
    const lastActivityAt = new Date().toISOString();

    // Create user with NULL token but timestamps still present (inconsistent state)
    await createTestUser(userId, null, sessionStartedAt, lastActivityAt);

    // Verify bug condition
    const beforeData = await getProfileSessionData(userId);
    expect(
      isBugCondition({
        userId,
        sessionToken: clientToken,
        databaseSessionToken: beforeData.active_session_token,
        sessionStartedAt: beforeData.session_started_at,
        lastActivityAt: beforeData.last_activity_at,
      })
    ).toBe(true);

    console.log('Test Case 2: Logout when already logged out');
    console.log(`  Database token: NULL`);
    console.log(`  Client token: "${clientToken}"`);
    console.log(`  Before logout:`, beforeData);

    // Call logout API
    const result = await callLogoutAPI(userId, clientToken);

    // Fetch session data after logout
    const afterData = await getProfileSessionData(userId);

    console.log(`  After logout:`, afterData);
    console.log(`  API response:`, result);

    // Document the counterexample
    if (
      afterData.session_started_at !== null ||
      afterData.last_activity_at !== null
    ) {
      console.log(`  ❌ BUG CONFIRMED: Timestamp fields not cleared despite logout`);
      console.log(`     - session_started_at: ${afterData.session_started_at} (should be NULL)`);
      console.log(`     - last_activity_at: ${afterData.last_activity_at} (should be NULL)`);
    }

    // This assertion will FAIL on unfixed code, confirming the bug exists
    expect(afterData.active_session_token).toBeNull();
    expect(afterData.session_started_at).toBeNull();
    expect(afterData.last_activity_at).toBeNull();
  });

  /**
   * Property 1: Bug Condition - Logout Clears All Session Fields
   * 
   * Test Case 3: Logout with valid token should clear session_started_at
   * 
   * SCENARIO: User calls logout with a valid matching sessionToken.
   * This is the normal logout flow.
   * 
   * EXPECTED BEHAVIOR: ALL three session fields should be cleared to NULL:
   * - active_session_token
   * - session_started_at
   * - last_activity_at
   * 
   * EXPECTED OUTCOME ON UNFIXED CODE: This test FAILS because the current implementation
   * only clears `active_session_token` and `last_activity_at`, but forgets to clear
   * `session_started_at`, leaving a timestamp that could be interpreted as an active session.
   */
  it('Test Case 3: Logout with valid token should clear session_started_at', async () => {
    const userId = '33333333-3333-3333-3333-333333333333';
    testUserIds.push(userId);

    const sessionToken = 'valid-token-abc123';
    const sessionStartedAt = new Date().toISOString();
    const lastActivityAt = new Date().toISOString();

    // Create user with active session
    await createTestUser(userId, sessionToken, sessionStartedAt, lastActivityAt);

    // Verify bug condition (before logout, session fields are present)
    const beforeData = await getProfileSessionData(userId);
    expect(
      isBugCondition({
        userId,
        sessionToken,
        databaseSessionToken: beforeData.active_session_token,
        sessionStartedAt: beforeData.session_started_at,
        lastActivityAt: beforeData.last_activity_at,
      })
    ).toBe(true);

    console.log('Test Case 3: Logout with valid matching token');
    console.log(`  Database token: "${sessionToken}"`);
    console.log(`  Client token: "${sessionToken}"`);
    console.log(`  Before logout:`, beforeData);

    // Call logout API with matching token
    const result = await callLogoutAPI(userId, sessionToken);

    // Fetch session data after logout
    const afterData = await getProfileSessionData(userId);

    console.log(`  After logout:`, afterData);
    console.log(`  API response:`, result);

    // Document the counterexample
    if (afterData.session_started_at !== null) {
      console.log(`  ❌ BUG CONFIRMED: session_started_at not cleared despite logout`);
      console.log(`     - active_session_token: ${afterData.active_session_token} (correctly NULL)`);
      console.log(`     - last_activity_at: ${afterData.last_activity_at} (correctly NULL)`);
      console.log(`     - session_started_at: ${afterData.session_started_at} (should be NULL but isn't!)`);
    }

    // This assertion will FAIL on unfixed code, confirming the bug exists
    expect(afterData.active_session_token).toBeNull();
    expect(afterData.session_started_at).toBeNull();
    expect(afterData.last_activity_at).toBeNull();
  });

  /**
   * Additional Test: Verify logout is idempotent
   * 
   * SCENARIO: User calls logout twice in succession.
   * 
   * EXPECTED BEHAVIOR: Second logout should succeed without error and all fields
   * should remain NULL (idempotent operation).
   * 
   * EXPECTED OUTCOME ON UNFIXED CODE: May fail if second logout returns error
   * or if any fields are not NULL after second logout.
   */
  it('Test Case 4: Double logout should be idempotent', async () => {
    const userId = '44444444-4444-4444-4444-444444444444';
    testUserIds.push(userId);

    const sessionToken = 'valid-token-abc123';
    const sessionStartedAt = new Date().toISOString();
    const lastActivityAt = new Date().toISOString();

    // Create user with active session
    await createTestUser(userId, sessionToken, sessionStartedAt, lastActivityAt);

    console.log('Test Case 4: Double logout (idempotency)');

    // First logout
    const result1 = await callLogoutAPI(userId, sessionToken);
    console.log(`  First logout response:`, result1);

    const afterFirstLogout = await getProfileSessionData(userId);
    console.log(`  After first logout:`, afterFirstLogout);

    // Second logout (should be idempotent)
    const result2 = await callLogoutAPI(userId, sessionToken);
    console.log(`  Second logout response:`, result2);

    const afterSecondLogout = await getProfileSessionData(userId);
    console.log(`  After second logout:`, afterSecondLogout);

    // Document the counterexample
    if (
      afterSecondLogout.active_session_token !== null ||
      afterSecondLogout.session_started_at !== null ||
      afterSecondLogout.last_activity_at !== null
    ) {
      console.log(`  ❌ BUG CONFIRMED: Session fields not NULL after double logout`);
      console.log(`     - active_session_token: ${afterSecondLogout.active_session_token}`);
      console.log(`     - session_started_at: ${afterSecondLogout.session_started_at}`);
      console.log(`     - last_activity_at: ${afterSecondLogout.last_activity_at}`);
    }

    // Both logouts should succeed
    expect(result1.success).toBe(true);
    expect(result2.success).toBe(true);

    // All fields should be NULL after both logouts
    expect(afterSecondLogout.active_session_token).toBeNull();
    expect(afterSecondLogout.session_started_at).toBeNull();
    expect(afterSecondLogout.last_activity_at).toBeNull();
  });
});
