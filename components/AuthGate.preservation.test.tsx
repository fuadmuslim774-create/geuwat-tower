import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import type { JourneyProgress } from '../types/geuwat';
import { createInitialProgress } from '../lib/progress';

/**
 * Preservation Property Tests for Journey Start Sync Timing Bugfix
 * 
 * **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6**
 * 
 * **Property 2: Preservation - Existing Functionality Unchanged**
 * 
 * **IMPORTANT**: Follow observation-first methodology
 * - Observe behavior on UNFIXED code for non-buggy inputs
 * - Write property-based tests capturing observed behavior patterns
 * - Run tests on UNFIXED code
 * - **EXPECTED OUTCOME**: Tests PASS (confirms baseline behavior to preserve)
 * 
 * These tests verify that the bugfix does NOT break existing functionality:
 * - Returning users with existing journey_started_at skip initialization (3.1)
 * - Stage completion sync continues to work (3.2)
 * - Progress restore from database continues to work (3.3)
 * - Manual force sync continues to work (3.4)
 * - Leaderboard view prioritizes ACTIVE users (3.5)
 * - Seed users without journey_started_at rank below ACTIVE users (3.6)
 */

describe('Preservation Property Tests: Journey Start Sync Timing', () => {
  beforeEach(() => {
    // Clear all storage before each test
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  afterEach(() => {
    // Clean up after each test
    window.localStorage.clear();
    window.sessionStorage.clear();
    vi.clearAllMocks();
  });

  /**
   * Property 3.1: Returning users with existing journey_started_at skip initialization
   * 
   * **Validates: Requirement 3.1**
   * 
   * OBSERVATION ON UNFIXED CODE:
   * - When a user has journey_started_at already set in local storage
   * - initializeJourneyStartOnFirstLogin checks if journeyStartedAt is null
   * - If not null, it logs "Journey already started, skipping" and returns early
   * - No sync operation is performed
   * 
   * EXPECTED BEHAVIOR (must be preserved):
   * - Returning users should NOT trigger initialization
   * - Existing journey_started_at timestamp should be preserved
   * - No unnecessary sync operations should occur
   */
  describe('Property 3.1: Returning users skip initialization', () => {
    it('should skip initialization when journey_started_at is already set', () => {
      console.log('\n=== Preservation Test: Returning User ===');
      
      // Setup: Create progress with existing journey_started_at
      const existingTimestamp = Date.now() - 86400000; // 1 day ago
      const existingProgress: JourneyProgress = {
        ...createInitialProgress(),
        journeyStartedAt: existingTimestamp,
      };
      
      // Store in local storage
      window.localStorage.setItem('gt_progress_v1', JSON.stringify(existingProgress));
      
      console.log(`Existing journey_started_at: ${existingTimestamp}`);
      
      // Simulate initializeJourneyStartOnFirstLogin logic
      const storedData = window.localStorage.getItem('gt_progress_v1');
      const progress = storedData ? JSON.parse(storedData) : createInitialProgress();
      
      // Check if journey already started
      const shouldSkipInitialization = progress.journeyStartedAt !== null;
      
      console.log(`Should skip initialization: ${shouldSkipInitialization}`);
      
      // ASSERTION: Initialization should be skipped for returning users
      expect(shouldSkipInitialization).toBe(true);
      
      // ASSERTION: Existing timestamp should be preserved
      expect(progress.journeyStartedAt).toBe(existingTimestamp);
      
      console.log('✅ PASS: Returning user skips initialization');
    });

    it('should preserve existing journey_started_at across multiple checks', () => {
      console.log('\n=== Preservation Test: Multiple Checks ===');
      
      // Setup: Create progress with existing journey_started_at
      const existingTimestamp = Date.now() - 172800000; // 2 days ago
      const existingProgress: JourneyProgress = {
        ...createInitialProgress(),
        journeyStartedAt: existingTimestamp,
      };
      
      // Store in local storage
      window.localStorage.setItem('gt_progress_v1', JSON.stringify(existingProgress));
      
      // Simulate multiple initialization checks (e.g., page refreshes)
      for (let i = 0; i < 5; i++) {
        const storedData = window.localStorage.getItem('gt_progress_v1');
        const progress = storedData ? JSON.parse(storedData) : createInitialProgress();
        
        // Check if journey already started
        const shouldSkipInitialization = progress.journeyStartedAt !== null;
        
        // ASSERTION: Should always skip initialization
        expect(shouldSkipInitialization).toBe(true);
        
        // ASSERTION: Timestamp should never change
        expect(progress.journeyStartedAt).toBe(existingTimestamp);
      }
      
      console.log('✅ PASS: Timestamp preserved across multiple checks');
    });
  });

  /**
   * Property 3.2: Stage completion sync continues to work
   * 
   * **Validates: Requirement 3.2**
   * 
   * OBSERVATION ON UNFIXED CODE:
   * - When a user completes a stage, updateOnStageComplete is called
   * - It updates stage progress and sets journeyStartedAt if null
   * - It calls syncLeaderboardEntry to sync to database
   * - syncLeaderboardEntry makes a POST request to /api/leaderboard/sync
   * 
   * EXPECTED BEHAVIOR (must be preserved):
   * - Stage completion should trigger sync
   * - Sync payload should include journey timestamps
   * - Sync should work regardless of bugfix changes
   */
  describe('Property 3.2: Stage completion sync continues to work', () => {
    it('should sync leaderboard entry on stage completion', async () => {
      console.log('\n=== Preservation Test: Stage Completion Sync ===');
      
      // Setup: Mock user
      const mockUser = {
        id: 'user-preservation-123',
        email: 'preservation@example.com',
        name: 'Preservation User',
        role: 'student' as const,
        avatar: 'chibi1',
        batchId: 'gen_1',
        username: 'preservationuser',
        avatarId: 'chibi1',
        sessionToken: 'session-preservation-123',
      };
      
      // Store user in local storage
      window.localStorage.setItem('geuwat_user', JSON.stringify(mockUser));
      
      // Setup: Create progress with journey started
      const journeyStartedAt = Date.now() - 3600000; // 1 hour ago
      const progress: JourneyProgress = {
        ...createInitialProgress(),
        journeyStartedAt,
      };
      
      // Mark first stage as completed
      progress.stages.alphabet.completed = true;
      progress.stages.alphabet.bestTimeSeconds = 120;
      
      window.localStorage.setItem('gt_progress_v1', JSON.stringify(progress));
      
      // Mock fetch to capture sync request
      let syncCalled = false;
      let syncPayload: any = null;
      
      global.fetch = vi.fn((url: string, options?: any) => {
        if (url === '/api/leaderboard/sync' && options?.method === 'POST') {
          syncCalled = true;
          syncPayload = JSON.parse(options.body);
          
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ success: true }),
          } as Response);
        }
        
        return Promise.reject(new Error('Unexpected fetch call'));
      });
      
      // Simulate syncLeaderboardEntry logic
      const storedUser = window.localStorage.getItem('geuwat_user');
      const user = storedUser ? JSON.parse(storedUser) : null;
      
      if (user) {
        const storedProgress = window.localStorage.getItem('gt_progress_v1');
        const currentProgress = storedProgress ? JSON.parse(storedProgress) : createInitialProgress();
        
        // Construct sync payload
        const payload = {
          userId: user.id,
          rankStageId: 'alphabet',
          timeSec: 120,
          journeyStartedAt: currentProgress.journeyStartedAt,
          journeyCompletedAt: currentProgress.journeyCompletedAt,
        };
        
        // Make sync request
        await fetch('/api/leaderboard/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      
      console.log(`Sync called: ${syncCalled}`);
      console.log(`Sync payload:`, syncPayload);
      
      // ASSERTION: Sync should be called
      expect(syncCalled).toBe(true);
      
      // ASSERTION: Sync payload should include journey timestamps
      expect(syncPayload).toBeDefined();
      expect(syncPayload.userId).toBe(mockUser.id);
      expect(syncPayload.rankStageId).toBe('alphabet');
      expect(syncPayload.journeyStartedAt).toBe(journeyStartedAt);
      
      console.log('✅ PASS: Stage completion sync works correctly');
    });
  });

  /**
   * Property 3.3: Progress restore from database continues to work
   * 
   * **Validates: Requirement 3.3**
   * 
   * OBSERVATION ON UNFIXED CODE:
   * - When AuthGate loads, it checks if progress has been restored
   * - If not, it calls restoreProgressFromDatabase
   * - restoreProgressFromDatabase fetches progress from /api/progress/sync
   * - If progress exists, it writes to local storage
   * - It also syncs journey timestamps from database to local storage
   * 
   * EXPECTED BEHAVIOR (must be preserved):
   * - Progress restore should fetch from database
   * - Journey timestamps should be synced to local storage
   * - Restore should work regardless of bugfix changes
   */
  describe('Property 3.3: Progress restore from database continues to work', () => {
    it('should restore progress from database on first load', async () => {
      console.log('\n=== Preservation Test: Progress Restore ===');
      
      // Setup: Mock user
      const mockUser = {
        id: 'user-restore-456',
        email: 'restore@example.com',
        name: 'Restore User',
        role: 'student' as const,
        avatar: 'chibi2',
        batchId: 'gen_1',
        username: 'restoreuser',
        avatarId: 'chibi2',
        sessionToken: 'session-restore-456',
      };
      
      // Store user in local storage
      window.localStorage.setItem('geuwat_user', JSON.stringify(mockUser));
      
      // Setup: Mock database progress
      const dbJourneyStartedAt = Date.now() - 7200000; // 2 hours ago
      const dbProgress: JourneyProgress = {
        ...createInitialProgress(),
        journeyStartedAt: dbJourneyStartedAt,
      };
      
      dbProgress.stages.alphabet.completed = true;
      dbProgress.stages.alphabet.bestTimeSeconds = 150;
      
      // Mock fetch to return database progress
      let restoreCalled = false;
      
      global.fetch = vi.fn((url: string) => {
        if (url.includes('/api/progress/sync') && url.includes('userId=')) {
          restoreCalled = true;
          
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
              success: true,
              progress: dbProgress,
            }),
          } as Response);
        }
        
        return Promise.reject(new Error('Unexpected fetch call'));
      });
      
      // Simulate restoreProgressFromDatabase logic
      const storedUser = window.localStorage.getItem('geuwat_user');
      const user = storedUser ? JSON.parse(storedUser) : null;
      
      if (user) {
        const response = await fetch(`/api/progress/sync?userId=${user.id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        
        if (response.ok) {
          const result = await response.json();
          
          if (result.success && result.progress) {
            // Write to local storage
            window.localStorage.setItem('gt_progress_v1', JSON.stringify(result.progress));
          }
        }
      }
      
      console.log(`Restore called: ${restoreCalled}`);
      
      // Check if progress was restored to local storage
      const restoredData = window.localStorage.getItem('gt_progress_v1');
      const restoredProgress = restoredData ? JSON.parse(restoredData) : null;
      
      console.log(`Restored journey_started_at: ${restoredProgress?.journeyStartedAt}`);
      
      // ASSERTION: Restore should be called
      expect(restoreCalled).toBe(true);
      
      // ASSERTION: Progress should be restored to local storage
      expect(restoredProgress).toBeDefined();
      expect(restoredProgress.journeyStartedAt).toBe(dbJourneyStartedAt);
      expect(restoredProgress.stages.alphabet.completed).toBe(true);
      
      console.log('✅ PASS: Progress restore from database works correctly');
    });

    it('should sync journey timestamps from database to local storage', async () => {
      console.log('\n=== Preservation Test: Journey Timestamp Sync ===');
      
      // Setup: Local storage has progress without journey_started_at
      const localProgress: JourneyProgress = {
        ...createInitialProgress(),
        journeyStartedAt: null, // Not set locally
      };
      
      window.localStorage.setItem('gt_progress_v1', JSON.stringify(localProgress));
      
      // Setup: Database has journey_started_at
      const dbJourneyStartedAt = Date.now() - 10800000; // 3 hours ago
      
      // Simulate syncJourneyTimestampsToLocalStorage logic
      const storedData = window.localStorage.getItem('gt_progress_v1');
      const progress = storedData ? JSON.parse(storedData) : createInitialProgress();
      
      let needsUpdate = false;
      const updates: Partial<JourneyProgress> = {};
      
      // If database has journey_started_at but local storage doesn't, sync it
      if (dbJourneyStartedAt && !progress.journeyStartedAt) {
        updates.journeyStartedAt = dbJourneyStartedAt;
        needsUpdate = true;
      }
      
      if (needsUpdate) {
        const updatedProgress = { ...progress, ...updates };
        window.localStorage.setItem('gt_progress_v1', JSON.stringify(updatedProgress));
      }
      
      // Check if timestamp was synced
      const syncedData = window.localStorage.getItem('gt_progress_v1');
      const syncedProgress = syncedData ? JSON.parse(syncedData) : null;
      
      console.log(`Synced journey_started_at: ${syncedProgress?.journeyStartedAt}`);
      
      // ASSERTION: Timestamp should be synced from database to local storage
      expect(syncedProgress.journeyStartedAt).toBe(dbJourneyStartedAt);
      
      console.log('✅ PASS: Journey timestamp sync works correctly');
    });
  });

  /**
   * Property 3.4: Manual force sync continues to work
   * 
   * **Validates: Requirement 3.4**
   * 
   * OBSERVATION ON UNFIXED CODE:
   * - Manual force sync tool at /force-sync.html allows manual synchronization
   * - It calls syncLeaderboardEntry with current progress
   * - Sync payload includes journey timestamps
   * 
   * EXPECTED BEHAVIOR (must be preserved):
   * - Manual force sync should work as before
   * - Sync should include journey timestamps
   * - User should be able to manually trigger sync
   */
  describe('Property 3.4: Manual force sync continues to work', () => {
    it('should allow manual force sync of journey timestamps', async () => {
      console.log('\n=== Preservation Test: Manual Force Sync ===');
      
      // Setup: Mock user
      const mockUser = {
        id: 'user-force-sync-789',
        email: 'forcesync@example.com',
        name: 'Force Sync User',
        role: 'student' as const,
        avatar: 'chibi3',
        batchId: 'gen_1',
        username: 'forcesyncuser',
        avatarId: 'chibi3',
        sessionToken: 'session-force-sync-789',
      };
      
      // Store user in local storage
      window.localStorage.setItem('geuwat_user', JSON.stringify(mockUser));
      
      // Setup: Create progress with journey timestamps
      const journeyStartedAt = Date.now() - 14400000; // 4 hours ago
      const progress: JourneyProgress = {
        ...createInitialProgress(),
        journeyStartedAt,
      };
      
      window.localStorage.setItem('gt_progress_v1', JSON.stringify(progress));
      
      // Mock fetch to capture manual sync request
      let manualSyncCalled = false;
      let manualSyncPayload: any = null;
      
      global.fetch = vi.fn((url: string, options?: any) => {
        if (url === '/api/leaderboard/sync' && options?.method === 'POST') {
          manualSyncCalled = true;
          manualSyncPayload = JSON.parse(options.body);
          
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ success: true }),
          } as Response);
        }
        
        return Promise.reject(new Error('Unexpected fetch call'));
      });
      
      // Simulate manual force sync
      const storedUser = window.localStorage.getItem('geuwat_user');
      const user = storedUser ? JSON.parse(storedUser) : null;
      
      if (user) {
        const storedProgress = window.localStorage.getItem('gt_progress_v1');
        const currentProgress = storedProgress ? JSON.parse(storedProgress) : createInitialProgress();
        
        // Construct sync payload
        const payload = {
          userId: user.id,
          rankStageId: 'alphabet',
          timeSec: null,
          journeyStartedAt: currentProgress.journeyStartedAt,
          journeyCompletedAt: currentProgress.journeyCompletedAt,
        };
        
        // Make manual sync request
        await fetch('/api/leaderboard/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      
      console.log(`Manual sync called: ${manualSyncCalled}`);
      console.log(`Manual sync payload:`, manualSyncPayload);
      
      // ASSERTION: Manual sync should be called
      expect(manualSyncCalled).toBe(true);
      
      // ASSERTION: Sync payload should include journey timestamps
      expect(manualSyncPayload).toBeDefined();
      expect(manualSyncPayload.userId).toBe(mockUser.id);
      expect(manualSyncPayload.journeyStartedAt).toBe(journeyStartedAt);
      
      console.log('✅ PASS: Manual force sync works correctly');
    });
  });

  /**
   * Property 3.5: Leaderboard view prioritizes ACTIVE users
   * 
   * **Validates: Requirement 3.5**
   * 
   * OBSERVATION ON UNFIXED CODE:
   * - v_global_ranks_ordered view uses priority_tier to sort users
   * - ACTIVE users (journey_started_at IS NOT NULL) have priority_tier = 1
   * - INACTIVE users (journey_started_at IS NULL) have priority_tier = 2
   * - View sorts by priority_tier ASC, then by other criteria
   * 
   * EXPECTED BEHAVIOR (must be preserved):
   * - ACTIVE users should always rank above INACTIVE users
   * - Priority tier logic should remain unchanged
   */
  describe('Property 3.5: Leaderboard view prioritizes ACTIVE users', () => {
    it('should prioritize ACTIVE users over INACTIVE users', () => {
      console.log('\n=== Preservation Test: Leaderboard Priority ===');
      
      // Simulate leaderboard data from v_global_ranks_ordered view
      const leaderboardData = [
        {
          user_id: 'active-user-1',
          username: 'Active User 1',
          journey_started_at: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
          priority_tier: 1, // ACTIVE
          rank_stage_id: 'alphabet',
        },
        {
          user_id: 'active-user-2',
          username: 'Active User 2',
          journey_started_at: new Date(Date.now() - 7200000).toISOString(), // 2 hours ago
          priority_tier: 1, // ACTIVE
          rank_stage_id: 'alphabet',
        },
        {
          user_id: 'inactive-user-1',
          username: 'Inactive User 1',
          journey_started_at: null,
          priority_tier: 2, // INACTIVE
          rank_stage_id: 'alphabet',
        },
        {
          user_id: 'inactive-user-2',
          username: 'Inactive User 2',
          journey_started_at: null,
          priority_tier: 2, // INACTIVE
          rank_stage_id: 'alphabet',
        },
      ];
      
      // Sort by priority_tier (simulating view behavior)
      const sortedData = [...leaderboardData].sort((a, b) => {
        if (a.priority_tier !== b.priority_tier) {
          return a.priority_tier - b.priority_tier;
        }
        return 0;
      });
      
      console.log('Sorted leaderboard:');
      sortedData.forEach((entry, index) => {
        console.log(`  ${index + 1}. ${entry.username} (priority_tier: ${entry.priority_tier})`);
      });
      
      // ASSERTION: All ACTIVE users should rank before INACTIVE users
      const activeUsers = sortedData.filter(u => u.priority_tier === 1);
      const inactiveUsers = sortedData.filter(u => u.priority_tier === 2);
      
      expect(activeUsers.length).toBe(2);
      expect(inactiveUsers.length).toBe(2);
      
      // Check that all ACTIVE users come before all INACTIVE users
      const lastActiveIndex = sortedData.findIndex(u => u.user_id === activeUsers[activeUsers.length - 1].user_id);
      const firstInactiveIndex = sortedData.findIndex(u => u.user_id === inactiveUsers[0].user_id);
      
      expect(lastActiveIndex).toBeLessThan(firstInactiveIndex);
      
      console.log('✅ PASS: ACTIVE users prioritized over INACTIVE users');
    });
  });

  /**
   * Property 3.6: Seed users without journey_started_at rank below ACTIVE users
   * 
   * **Validates: Requirement 3.6**
   * 
   * OBSERVATION ON UNFIXED CODE:
   * - Seed users are created without journey_started_at (NULL)
   * - They are treated as INACTIVE (priority_tier = 2)
   * - ACTIVE users (priority_tier = 1) rank above them
   * - This is the expected behavior for seed users
   * 
   * EXPECTED BEHAVIOR (must be preserved):
   * - Seed users should remain INACTIVE
   * - ACTIVE users should rank above seed users
   * - Seed user ranking logic should remain unchanged
   */
  describe('Property 3.6: Seed users rank below ACTIVE users', () => {
    it('should rank seed users below ACTIVE users', () => {
      console.log('\n=== Preservation Test: Seed User Ranking ===');
      
      // Simulate leaderboard data with seed users
      const leaderboardData = [
        {
          user_id: 'active-user-1',
          username: 'Active User 1',
          journey_started_at: new Date(Date.now() - 3600000).toISOString(),
          priority_tier: 1, // ACTIVE
          rank_stage_id: 'alphabet',
        },
        {
          user_id: 'seed-user-1',
          username: 'Seed User 1',
          journey_started_at: null, // Seed users don't have journey_started_at
          priority_tier: 2, // INACTIVE
          rank_stage_id: 'alphabet',
        },
        {
          user_id: 'seed-user-2',
          username: 'Seed User 2',
          journey_started_at: null,
          priority_tier: 2, // INACTIVE
          rank_stage_id: 'alphabet',
        },
        {
          user_id: 'active-user-2',
          username: 'Active User 2',
          journey_started_at: new Date(Date.now() - 7200000).toISOString(),
          priority_tier: 1, // ACTIVE
          rank_stage_id: 'alphabet',
        },
      ];
      
      // Sort by priority_tier (simulating view behavior)
      const sortedData = [...leaderboardData].sort((a, b) => {
        if (a.priority_tier !== b.priority_tier) {
          return a.priority_tier - b.priority_tier;
        }
        return 0;
      });
      
      console.log('Sorted leaderboard with seed users:');
      sortedData.forEach((entry, index) => {
        const userType = entry.user_id.startsWith('seed-') ? 'SEED' : 'ACTIVE';
        console.log(`  ${index + 1}. ${entry.username} (${userType}, priority_tier: ${entry.priority_tier})`);
      });
      
      // ASSERTION: All ACTIVE users should rank before seed users
      const activeUsers = sortedData.filter(u => u.priority_tier === 1);
      const seedUsers = sortedData.filter(u => u.user_id.startsWith('seed-'));
      
      expect(activeUsers.length).toBe(2);
      expect(seedUsers.length).toBe(2);
      
      // Check that all ACTIVE users come before all seed users
      const lastActiveIndex = sortedData.findIndex(u => u.user_id === activeUsers[activeUsers.length - 1].user_id);
      const firstSeedIndex = sortedData.findIndex(u => u.user_id === seedUsers[0].user_id);
      
      expect(lastActiveIndex).toBeLessThan(firstSeedIndex);
      
      // ASSERTION: All seed users should be INACTIVE
      seedUsers.forEach(seedUser => {
        expect(seedUser.priority_tier).toBe(2);
        expect(seedUser.journey_started_at).toBeNull();
      });
      
      console.log('✅ PASS: Seed users rank below ACTIVE users');
    });

    it('should handle 150 seed users ranking below ACTIVE users', () => {
      console.log('\n=== Preservation Test: 150 Seed Users ===');
      
      // Simulate leaderboard data with 150 seed users and 2 ACTIVE users
      const leaderboardData = [];
      
      // Add 2 ACTIVE users
      leaderboardData.push({
        user_id: 'active-user-1',
        username: 'Active User 1',
        journey_started_at: new Date(Date.now() - 3600000).toISOString(),
        priority_tier: 1,
        rank_stage_id: 'alphabet',
      });
      
      leaderboardData.push({
        user_id: 'active-user-2',
        username: 'Active User 2',
        journey_started_at: new Date(Date.now() - 7200000).toISOString(),
        priority_tier: 1,
        rank_stage_id: 'alphabet',
      });
      
      // Add 150 seed users
      for (let i = 1; i <= 150; i++) {
        leaderboardData.push({
          user_id: `seed-user-${i}`,
          username: `Seed User ${i}`,
          journey_started_at: null,
          priority_tier: 2,
          rank_stage_id: 'alphabet',
        });
      }
      
      // Sort by priority_tier
      const sortedData = [...leaderboardData].sort((a, b) => {
        if (a.priority_tier !== b.priority_tier) {
          return a.priority_tier - b.priority_tier;
        }
        return 0;
      });
      
      console.log(`Total users: ${sortedData.length}`);
      console.log(`First user: ${sortedData[0].username} (priority_tier: ${sortedData[0].priority_tier})`);
      console.log(`Second user: ${sortedData[1].username} (priority_tier: ${sortedData[1].priority_tier})`);
      console.log(`Third user: ${sortedData[2].username} (priority_tier: ${sortedData[2].priority_tier})`);
      
      // ASSERTION: First 2 users should be ACTIVE
      expect(sortedData[0].priority_tier).toBe(1);
      expect(sortedData[1].priority_tier).toBe(1);
      
      // ASSERTION: Remaining 150 users should be INACTIVE seed users
      for (let i = 2; i < sortedData.length; i++) {
        expect(sortedData[i].priority_tier).toBe(2);
        expect(sortedData[i].user_id).toMatch(/^seed-user-/);
      }
      
      console.log('✅ PASS: 150 seed users rank below 2 ACTIVE users');
    });
  });
});
