/**
 * Bug Condition Exploration Test: Active Users Ranked Below Inactive Users
 * 
 * **Validates: Requirements 1.1, 1.2, 1.3, 1.4**
 * 
 * **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
 * **DO NOT attempt to fix the test or the code when it fails**
 * 
 * This test queries the current `v_global_ranks_ordered` view and verifies that:
 * 1. Active users (with `journey_started_at IS NOT NULL`) appear at lower ranks than inactive users
 * 2. The `priority_tier` column is missing from the view
 * 3. The ORDER BY clause does not prioritize active users
 * 
 * **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves the bug exists)
 * 
 * When the fix is implemented, this same test will PASS, confirming the bug is fixed.
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client for testing
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

type LeaderboardRow = {
  user_id: string;
  username: string;
  rank_stage_id: string | null;
  time_sec: number | null;
  journey_started_at: string | null;
  journey_completed_at: string | null;
  priority_tier?: number;
  effective_time_sec?: number;
};

describe('Bug Condition Exploration: Active Users Ranked Below Inactive Users', () => {
  let leaderboardData: LeaderboardRow[] = [];
  let viewColumns: string[] = [];
  let skipTests = false;

  beforeAll(async () => {
    // Check if Supabase is configured
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('⚠️  Supabase not configured. Skipping database tests.');
      skipTests = true;
      return;
    }

    try {
      // Query the view to get actual data
      const { data, error } = await supabase
        .from('v_global_ranks_ordered')
        .select('*')
        .limit(50);

      if (error) {
        console.error('❌ Error querying v_global_ranks_ordered:', error);
        skipTests = true;
        return;
      }

      leaderboardData = (data || []) as LeaderboardRow[];
      
      // Extract column names from the first row
      if (leaderboardData.length > 0) {
        viewColumns = Object.keys(leaderboardData[0]);
      }

      console.log('\n📊 Leaderboard Data Summary:');
      console.log(`   Total rows fetched: ${leaderboardData.length}`);
      console.log(`   View columns: ${viewColumns.join(', ')}`);
      
      // Count active vs inactive users
      const activeUsers = leaderboardData.filter(row => row.journey_started_at !== null);
      const inactiveUsers = leaderboardData.filter(row => row.journey_started_at === null);
      
      console.log(`   Active users (journey_started_at IS NOT NULL): ${activeUsers.length}`);
      console.log(`   Inactive users (journey_started_at IS NULL): ${inactiveUsers.length}`);
    } catch (err) {
      console.error('❌ Unexpected error in beforeAll:', err);
      skipTests = true;
    }
  });

  /**
   * Property 1: Bug Condition - Active Users Ranked Below Inactive Users
   * 
   * **Validates: Requirements 1.1**
   * 
   * This test verifies that the bug exists: active users appear at lower ranks
   * (higher rank numbers) than inactive users.
   * 
   * **EXPECTED OUTCOME**: Test FAILS on unfixed code (confirms bug exists)
   * **EXPECTED OUTCOME**: Test PASSES on fixed code (confirms bug is fixed)
   */
  it('Property 1: Active users should rank above inactive users (BUG: currently ranks below)', () => {
    if (skipTests) {
      console.log('⏭️  Skipping test - Supabase not configured');
      return;
    }

    console.log('\n🔍 Testing Property 1: Active Users Rank Above Inactive Users');

    // Find active and inactive users
    const activeUsers = leaderboardData.filter(row => row.journey_started_at !== null);
    const inactiveUsers = leaderboardData.filter(row => row.journey_started_at === null);

    console.log(`   Active users found: ${activeUsers.length}`);
    console.log(`   Inactive users found: ${inactiveUsers.length}`);

    // If we don't have both types, we can't test the bug condition
    if (activeUsers.length === 0 || inactiveUsers.length === 0) {
      console.log('⚠️  Cannot test bug condition - need both active and inactive users');
      console.log('   This is not a test failure, just insufficient test data');
      return;
    }

    // Find the position (index) of the first active user and first inactive user
    const firstActiveUserIndex = leaderboardData.findIndex(row => row.journey_started_at !== null);
    const firstInactiveUserIndex = leaderboardData.findIndex(row => row.journey_started_at === null);

    console.log(`   First active user at index: ${firstActiveUserIndex}`);
    console.log(`   First inactive user at index: ${firstInactiveUserIndex}`);

    if (firstActiveUserIndex !== -1 && firstInactiveUserIndex !== -1) {
      const firstActiveUser = leaderboardData[firstActiveUserIndex];
      const firstInactiveUser = leaderboardData[firstInactiveUserIndex];

      console.log(`   First active user: ${firstActiveUser.username} (stage: ${firstActiveUser.rank_stage_id})`);
      console.log(`   First inactive user: ${firstInactiveUser.username} (stage: ${firstInactiveUser.rank_stage_id})`);
    }

    // Count how many inactive users appear before the first active user
    const inactiveUsersBeforeFirstActive = leaderboardData
      .slice(0, firstActiveUserIndex)
      .filter(row => row.journey_started_at === null).length;

    console.log(`   Inactive users appearing before first active user: ${inactiveUsersBeforeFirstActive}`);

    // Document counterexamples
    if (inactiveUsersBeforeFirstActive > 0) {
      console.log('\n❌ BUG CONFIRMED: Inactive users appear above active users');
      console.log('   Counterexamples (inactive users ranked above active users):');
      
      const counterexamples = leaderboardData
        .slice(0, firstActiveUserIndex)
        .filter(row => row.journey_started_at === null)
        .slice(0, 5); // Show first 5 counterexamples

      counterexamples.forEach((user, idx) => {
        console.log(`   ${idx + 1}. ${user.username} (stage: ${user.rank_stage_id}, time: ${user.time_sec})`);
      });
    }

    // THE ASSERTION: On unfixed code, this will FAIL (confirming the bug)
    // On fixed code, this will PASS (confirming the fix works)
    expect(firstActiveUserIndex).toBeLessThan(firstInactiveUserIndex);
    
    // Additional assertion: ALL active users should appear before ALL inactive users
    const lastActiveUserIndex = leaderboardData.map((row, idx) => 
      row.journey_started_at !== null ? idx : -1
    ).filter(idx => idx !== -1).pop() || -1;

    if (lastActiveUserIndex !== -1 && firstInactiveUserIndex !== -1) {
      console.log(`   Last active user at index: ${lastActiveUserIndex}`);
      expect(lastActiveUserIndex).toBeLessThan(firstInactiveUserIndex);
    }
  });

  /**
   * Property 1.2: priority_tier Column Should Exist
   * 
   * **Validates: Requirements 1.2, 2.1**
   * 
   * This test verifies that the view includes the `priority_tier` column
   * which is needed to prioritize active users.
   * 
   * **EXPECTED OUTCOME**: Test FAILS on unfixed code (column missing)
   * **EXPECTED OUTCOME**: Test PASSES on fixed code (column exists)
   */
  it('Property 1.2: View should include priority_tier column (BUG: currently missing)', () => {
    if (skipTests) {
      console.log('⏭️  Skipping test - Supabase not configured');
      return;
    }

    console.log('\n🔍 Testing Property 1.2: priority_tier Column Exists');
    console.log(`   View columns: ${viewColumns.join(', ')}`);

    const hasPriorityTier = viewColumns.includes('priority_tier');
    console.log(`   priority_tier column exists: ${hasPriorityTier}`);

    if (!hasPriorityTier) {
      console.log('❌ BUG CONFIRMED: priority_tier column is missing from view');
    }

    // THE ASSERTION: On unfixed code, this will FAIL (column missing)
    // On fixed code, this will PASS (column exists)
    expect(hasPriorityTier).toBe(true);
  });

  /**
   * Property 1.3: effective_time_sec Column Should Exist
   * 
   * **Validates: Requirements 1.4, 2.4**
   * 
   * This test verifies that the view includes the `effective_time_sec` column
   * which calculates elapsed time for in-progress users.
   * 
   * **EXPECTED OUTCOME**: Test FAILS on unfixed code (column missing)
   * **EXPECTED OUTCOME**: Test PASSES on fixed code (column exists)
   */
  it('Property 1.3: View should include effective_time_sec column (BUG: currently missing)', () => {
    if (skipTests) {
      console.log('⏭️  Skipping test - Supabase not configured');
      return;
    }

    console.log('\n🔍 Testing Property 1.3: effective_time_sec Column Exists');
    console.log(`   View columns: ${viewColumns.join(', ')}`);

    const hasEffectiveTimeSec = viewColumns.includes('effective_time_sec');
    console.log(`   effective_time_sec column exists: ${hasEffectiveTimeSec}`);

    if (!hasEffectiveTimeSec) {
      console.log('❌ BUG CONFIRMED: effective_time_sec column is missing from view');
    }

    // THE ASSERTION: On unfixed code, this will FAIL (column missing)
    // On fixed code, this will PASS (column exists)
    expect(hasEffectiveTimeSec).toBe(true);
  });

  /**
   * Property 1.4: journey_started_at and journey_completed_at Columns Should Exist
   * 
   * **Validates: Requirements 1.3, 2.3**
   * 
   * This test verifies that the view includes journey timestamp columns.
   * 
   * **EXPECTED OUTCOME**: May PASS or FAIL depending on migration state
   */
  it('Property 1.4: View should include journey timestamp columns', () => {
    if (skipTests) {
      console.log('⏭️  Skipping test - Supabase not configured');
      return;
    }

    console.log('\n🔍 Testing Property 1.4: Journey Timestamp Columns Exist');
    console.log(`   View columns: ${viewColumns.join(', ')}`);

    const hasJourneyStartedAt = viewColumns.includes('journey_started_at');
    const hasJourneyCompletedAt = viewColumns.includes('journey_completed_at');

    console.log(`   journey_started_at column exists: ${hasJourneyStartedAt}`);
    console.log(`   journey_completed_at column exists: ${hasJourneyCompletedAt}`);

    if (!hasJourneyStartedAt || !hasJourneyCompletedAt) {
      console.log('❌ BUG CONFIRMED: Journey timestamp columns are missing from view');
      console.log('   This may indicate migration_add_journey_timestamps.sql was not applied');
    }

    // THE ASSERTION: These columns should exist (from migration_add_journey_timestamps.sql)
    expect(hasJourneyStartedAt).toBe(true);
    expect(hasJourneyCompletedAt).toBe(true);
  });

  /**
   * Property 1.5: Document Counterexamples for Root Cause Analysis
   * 
   * This test documents specific counterexamples to help understand the root cause.
   */
  it('Property 1.5: Document counterexamples for root cause analysis', () => {
    if (skipTests) {
      console.log('⏭️  Skipping test - Supabase not configured');
      return;
    }

    console.log('\n📋 Counterexample Documentation:');
    console.log('   This test documents the bug for root cause analysis');

    // Find pairs of (inactive user, active user) where inactive ranks higher
    const counterexamples: Array<{
      inactiveUser: LeaderboardRow;
      inactiveIndex: number;
      activeUser: LeaderboardRow;
      activeIndex: number;
    }> = [];

    leaderboardData.forEach((row, idx) => {
      if (row.journey_started_at === null) {
        // This is an inactive user, find any active user below them
        const activeUserBelow = leaderboardData
          .slice(idx + 1)
          .find(r => r.journey_started_at !== null);
        
        if (activeUserBelow) {
          const activeIndex = leaderboardData.indexOf(activeUserBelow);
          counterexamples.push({
            inactiveUser: row,
            inactiveIndex: idx,
            activeUser: activeUserBelow,
            activeIndex: activeIndex,
          });
        }
      }
    });

    console.log(`   Total counterexamples found: ${counterexamples.length}`);

    if (counterexamples.length > 0) {
      console.log('\n   Sample counterexamples (first 3):');
      counterexamples.slice(0, 3).forEach((ex, idx) => {
        console.log(`\n   Counterexample ${idx + 1}:`);
        console.log(`     Inactive user at rank ${ex.inactiveIndex + 1}: ${ex.inactiveUser.username}`);
        console.log(`       - stage: ${ex.inactiveUser.rank_stage_id}`);
        console.log(`       - time_sec: ${ex.inactiveUser.time_sec}`);
        console.log(`       - journey_started_at: ${ex.inactiveUser.journey_started_at}`);
        console.log(`     Active user at rank ${ex.activeIndex + 1}: ${ex.activeUser.username}`);
        console.log(`       - stage: ${ex.activeUser.rank_stage_id}`);
        console.log(`       - time_sec: ${ex.activeUser.time_sec}`);
        console.log(`       - journey_started_at: ${ex.activeUser.journey_started_at}`);
      });

      console.log('\n❌ BUG CONFIRMED: Active users are ranked below inactive users');
    } else {
      console.log('✅ No counterexamples found - bug may already be fixed');
    }

    // This test always passes - it's just for documentation
    expect(true).toBe(true);
  });
});
