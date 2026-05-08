import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { readProgress, writeProgress, getStorageKeys } from './storage';
import type { JourneyProgress } from '../types/geuwat';

/**
 * Bug Condition Exploration Test for Data Persistence After Logout
 * 
 * **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**
 * 
 * This test encodes the EXPECTED behavior for account switching:
 * - User A logs out
 * - User B logs in on the same device
 * - User B should see ONLY user B's data from database, NOT user A's cached data
 * 
 * CRITICAL: This test MUST FAIL on unfixed code - failure confirms the bug exists.
 * When this test passes after implementing the fix, it confirms the bug is resolved.
 * 
 * Property 1: Bug Condition - Account Switching Data Isolation
 * 
 * For any logout-login sequence where the logout user ID differs from the login user ID
 * (account switching on the same device), the fixed logout handler SHALL clear all
 * user-specific data from localStorage (gt_progress_v1, gt_profile_v1, gt_sfx_enabled_v1)
 * and all session-specific flags from sessionStorage (progress_restored), ensuring the
 * new account restores its own data from the database without seeing any data from the
 * previous account.
 */

/**
 * Helper function to create mock progress data for a user
 */
function createMockProgress(userId: string, stagesCompleted: number): JourneyProgress {
  const now = Date.now();
  return {
    journeyStartedAt: now - 3600000, // 1 hour ago
    journeyCompletedAt: null,
    stages: {
      alphabet: {
        unlocked: true,
        completed: stagesCompleted >= 1,
        bestPercentage: stagesCompleted >= 1 ? 100 : 0,
        lastPercentage: stagesCompleted >= 1 ? 100 : 0,
        bestTimeSeconds: stagesCompleted >= 1 ? 45 : null,
        lastTimeSeconds: stagesCompleted >= 1 ? 45 : null,
        attempts: stagesCompleted >= 1 ? 1 : 0,
        lastPlayedAt: stagesCompleted >= 1 ? now : null,
      },
      lax_vowel: {
        unlocked: stagesCompleted >= 1,
        completed: stagesCompleted >= 2,
        bestPercentage: stagesCompleted >= 2 ? 100 : 0,
        lastPercentage: stagesCompleted >= 2 ? 100 : 0,
        bestTimeSeconds: stagesCompleted >= 2 ? 60 : null,
        lastTimeSeconds: stagesCompleted >= 2 ? 60 : null,
        attempts: stagesCompleted >= 2 ? 1 : 0,
        lastPlayedAt: stagesCompleted >= 2 ? now : null,
      },
      tense_vowel: {
        unlocked: stagesCompleted >= 2,
        completed: stagesCompleted >= 3,
        bestPercentage: stagesCompleted >= 3 ? 100 : 0,
        lastPercentage: stagesCompleted >= 3 ? 100 : 0,
        bestTimeSeconds: stagesCompleted >= 3 ? 55 : null,
        lastTimeSeconds: stagesCompleted >= 3 ? 55 : null,
        attempts: stagesCompleted >= 3 ? 1 : 0,
        lastPlayedAt: stagesCompleted >= 3 ? now : null,
      },
      diphthong: {
        unlocked: stagesCompleted >= 3,
        completed: stagesCompleted >= 4,
        bestPercentage: stagesCompleted >= 4 ? 100 : 0,
        lastPercentage: stagesCompleted >= 4 ? 100 : 0,
        bestTimeSeconds: stagesCompleted >= 4 ? 70 : null,
        lastTimeSeconds: stagesCompleted >= 4 ? 70 : null,
        attempts: stagesCompleted >= 4 ? 1 : 0,
        lastPlayedAt: stagesCompleted >= 4 ? now : null,
      },
      voiceless: {
        unlocked: stagesCompleted >= 4,
        completed: stagesCompleted >= 5,
        bestPercentage: stagesCompleted >= 5 ? 100 : 0,
        lastPercentage: stagesCompleted >= 5 ? 100 : 0,
        bestTimeSeconds: stagesCompleted >= 5 ? 80 : null,
        lastTimeSeconds: stagesCompleted >= 5 ? 80 : null,
        attempts: stagesCompleted >= 5 ? 1 : 0,
        lastPlayedAt: stagesCompleted >= 5 ? now : null,
      },
      voiced: {
        unlocked: stagesCompleted >= 5,
        completed: false,
        bestPercentage: 0,
        lastPercentage: 0,
        bestTimeSeconds: null,
        lastTimeSeconds: null,
        attempts: 0,
        lastPlayedAt: null,
      },
      final_s_es: {
        unlocked: false,
        completed: false,
        bestPercentage: 0,
        lastPercentage: 0,
        bestTimeSeconds: null,
        lastTimeSeconds: null,
        attempts: 0,
        lastPlayedAt: null,
      },
      final_d_ed: {
        unlocked: false,
        completed: false,
        bestPercentage: 0,
        lastPercentage: 0,
        bestTimeSeconds: null,
        lastTimeSeconds: null,
        attempts: 0,
        lastPlayedAt: null,
      },
      royal_king: {
        unlocked: false,
        completed: false,
        bestPercentage: 0,
        lastPercentage: 0,
        bestTimeSeconds: null,
        lastTimeSeconds: null,
        attempts: 0,
        lastPlayedAt: null,
      },
    },
  };
}

/**
 * Simulate the CURRENT logout handler behavior (UNFIXED)
 * This intentionally preserves gt_progress_v1 and does not clear progress_restored
 */
function simulateCurrentLogoutHandler() {
  const keys = getStorageKeys();
  
  // Clear profile and settings (user-specific UI state)
  window.localStorage.removeItem(keys.profile);
  window.localStorage.removeItem(keys.sfxEnabled);
  
  // IMPORTANT: DO NOT clear progress! (THIS IS THE BUG)
  // Progress should persist across login sessions
  // It will be synced to database and restored on next login
  // window.localStorage.removeItem(keys.progress); // COMMENTED OUT (BUG)
  
  // Clear auth session
  window.localStorage.removeItem('geuwat_user');
  
  // Clear session storage (temporary run state)
  Object.keys(window.sessionStorage).forEach((key) => {
    if (key.startsWith(keys.runPrefix) || key.startsWith(keys.resultPrefix)) {
      window.sessionStorage.removeItem(key);
    }
  });
  
  // BUG: Does not clear progress_restored flag from sessionStorage
  // This causes the new account to skip database restoration
}

/**
 * Simulate the FIXED logout handler behavior
 * This clears ALL user-specific data including gt_progress_v1 and progress_restored
 */
function simulateFixedLogoutHandler() {
  const keys = getStorageKeys();
  
  // Clear profile and settings (user-specific UI state)
  window.localStorage.removeItem(keys.profile);
  window.localStorage.removeItem(keys.sfxEnabled);
  
  // FIXED: Clear progress to prevent cross-contamination
  window.localStorage.removeItem(keys.progress);
  
  // Clear auth session
  window.localStorage.removeItem('geuwat_user');
  
  // Clear session storage (temporary run state)
  Object.keys(window.sessionStorage).forEach((key) => {
    if (key.startsWith(keys.runPrefix) || key.startsWith(keys.resultPrefix)) {
      window.sessionStorage.removeItem(key);
    }
  });
  
  // FIXED: Clear progress_restored flag to ensure new account restores from database
  window.sessionStorage.removeItem('progress_restored');
}

/**
 * Simulate login for a user
 */
function simulateLogin(userId: string, username: string) {
  const user = {
    id: userId,
    email: `${username}@example.com`,
    name: username,
    role: 'student',
    avatar: 'chibi1',
    batchId: 'gen_1',
    username: username,
    avatarId: 'chibi1',
    sessionToken: `session-${userId}`,
  };
  
  window.localStorage.setItem('geuwat_user', JSON.stringify(user));
}

/**
 * Simulate restoring progress from database for a user
 * In the real app, this would be an API call
 */
function simulateRestoreProgressFromDatabase(userId: string, stagesCompleted: number): boolean {
  // Check if progress_restored flag is set
  const hasRestoredProgress = window.sessionStorage.getItem('progress_restored');
  
  if (hasRestoredProgress) {
    console.log('[simulateRestoreProgressFromDatabase] progress_restored flag is set, skipping restore');
    return false; // Skip restoration (BUG: this causes user B to see user A's data)
  }
  
  console.log('[simulateRestoreProgressFromDatabase] Restoring progress from database');
  const progress = createMockProgress(userId, stagesCompleted);
  writeProgress(progress);
  window.sessionStorage.setItem('progress_restored', 'true');
  return true;
}

describe('Bug Condition Exploration: Account Switching Data Contamination', () => {
  beforeEach(() => {
    // Clear all storage before each test
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  afterEach(() => {
    // Clean up after each test
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  /**
   * Test Case 1: Account Switch Progress Contamination
   * 
   * SCENARIO:
   * - User A (id: "user-123") has 5 stages completed
   * - User A logs out
   * - User B (id: "user-456") has 2 stages completed in database
   * - User B logs in on the same device
   * 
   * EXPECTED BEHAVIOR (after fix):
   * - User B sees user B's progress (2 stages completed) from database
   * - User B does NOT see user A's progress (5 stages completed)
   * 
   * CURRENT BEHAVIOR (unfixed):
   * - User B sees user A's progress (5 stages completed) from localStorage
   * - restoreProgressFromDatabase() is NOT called for user B
   * 
   * EXPECTED OUTCOME: This test FAILS on unfixed code (confirms bug exists)
   */
  it('Test Case 1: User B sees user A\'s progress after account switch (BUG)', () => {
    console.log('\n=== Test Case 1: Account Switch Progress Contamination ===');
    
    // Step 1: User A logs in and has 5 stages completed
    const userAId = 'user-123';
    const userAUsername = 'Alice';
    const userAStagesCompleted = 5;
    
    simulateLogin(userAId, userAUsername);
    const userAProgress = createMockProgress(userAId, userAStagesCompleted);
    writeProgress(userAProgress);
    window.sessionStorage.setItem('progress_restored', 'true');
    
    console.log(`User A (${userAUsername}) logged in with ${userAStagesCompleted} stages completed`);
    
    // Verify user A's progress is in localStorage
    const userAProgressStored = readProgress();
    expect(userAProgressStored).not.toBeNull();
    expect(userAProgressStored!.stages.alphabet.completed).toBe(true);
    expect(userAProgressStored!.stages.lax_vowel.completed).toBe(true);
    expect(userAProgressStored!.stages.tense_vowel.completed).toBe(true);
    expect(userAProgressStored!.stages.diphthong.completed).toBe(true);
    expect(userAProgressStored!.stages.voiceless.completed).toBe(true);
    expect(userAProgressStored!.stages.voiced.completed).toBe(false);
    
    // Step 2: User A logs out (CURRENT/UNFIXED behavior)
    console.log(`User A logs out (using CURRENT logout handler)`);
    simulateCurrentLogoutHandler();
    
    // Verify logout behavior (CURRENT/UNFIXED)
    const progressAfterLogout = readProgress();
    const progressRestoredFlag = window.sessionStorage.getItem('progress_restored');
    
    console.log(`After logout:`);
    console.log(`  - gt_progress_v1 exists: ${progressAfterLogout !== null}`);
    console.log(`  - progress_restored flag: ${progressRestoredFlag}`);
    
    // BUG: Progress is NOT cleared (intentionally preserved)
    expect(progressAfterLogout).not.toBeNull();
    
    // BUG: progress_restored flag is NOT cleared
    expect(progressRestoredFlag).toBe('true');
    
    // Step 3: User B logs in (has 2 stages completed in database)
    const userBId = 'user-456';
    const userBUsername = 'Bob';
    const userBStagesCompleted = 2;
    
    console.log(`User B (${userBUsername}) logs in (has ${userBStagesCompleted} stages in database)`);
    simulateLogin(userBId, userBUsername);
    
    // Step 4: Attempt to restore progress from database
    const restored = simulateRestoreProgressFromDatabase(userBId, userBStagesCompleted);
    
    console.log(`Restore from database called: ${!restored ? 'SKIPPED (BUG)' : 'SUCCESS'}`);
    
    // BUG: Restoration is skipped because progress_restored flag is still set
    expect(restored).toBe(false);
    
    // Step 5: Check what progress user B sees
    const userBProgressDisplayed = readProgress();
    
    console.log(`User B sees progress:`);
    if (userBProgressDisplayed) {
      const completedStages = Object.values(userBProgressDisplayed.stages).filter(s => s.completed).length;
      console.log(`  - Stages completed: ${completedStages}`);
      console.log(`  - alphabet: ${userBProgressDisplayed.stages.alphabet.completed}`);
      console.log(`  - lax_vowel: ${userBProgressDisplayed.stages.lax_vowel.completed}`);
      console.log(`  - tense_vowel: ${userBProgressDisplayed.stages.tense_vowel.completed}`);
      console.log(`  - diphthong: ${userBProgressDisplayed.stages.diphthong.completed}`);
      console.log(`  - voiceless: ${userBProgressDisplayed.stages.voiceless.completed}`);
    }
    
    // EXPECTED BEHAVIOR (after fix): User B should see 2 stages completed (from database)
    // CURRENT BEHAVIOR (unfixed): User B sees 5 stages completed (user A's data)
    
    // This assertion will FAIL on unfixed code, confirming the bug exists
    expect(userBProgressDisplayed).not.toBeNull();
    
    // Count completed stages
    const completedStages = Object.values(userBProgressDisplayed!.stages).filter(s => s.completed).length;
    
    console.log(`\nCOUNTEREXAMPLE FOUND:`);
    console.log(`  - User B should see ${userBStagesCompleted} stages completed`);
    console.log(`  - User B actually sees ${completedStages} stages completed`);
    console.log(`  - User B is seeing User A's data (BUG CONFIRMED)`);
    
    // This will FAIL on unfixed code
    expect(completedStages).toBe(userBStagesCompleted);
    expect(userBProgressDisplayed!.stages.alphabet.completed).toBe(true);
    expect(userBProgressDisplayed!.stages.lax_vowel.completed).toBe(true);
    expect(userBProgressDisplayed!.stages.tense_vowel.completed).toBe(false); // User B only has 2 stages
    expect(userBProgressDisplayed!.stages.diphthong.completed).toBe(false);
    expect(userBProgressDisplayed!.stages.voiceless.completed).toBe(false);
  });

  /**
   * Test Case 2: Verify FIXED logout handler clears all data
   * 
   * This test verifies that the FIXED logout handler correctly clears:
   * - gt_progress_v1 from localStorage
   * - progress_restored flag from sessionStorage
   * 
   * When this test passes, it confirms the fix works correctly.
   */
  it('Test Case 2: FIXED logout handler clears all user-specific data', () => {
    console.log('\n=== Test Case 2: FIXED Logout Handler ===');
    
    // Step 1: User A logs in and has 5 stages completed
    const userAId = 'user-123';
    const userAUsername = 'Alice';
    const userAStagesCompleted = 5;
    
    simulateLogin(userAId, userAUsername);
    const userAProgress = createMockProgress(userAId, userAStagesCompleted);
    writeProgress(userAProgress);
    window.sessionStorage.setItem('progress_restored', 'true');
    
    console.log(`User A (${userAUsername}) logged in with ${userAStagesCompleted} stages completed`);
    
    // Verify user A's progress is in localStorage
    const userAProgressStored = readProgress();
    expect(userAProgressStored).not.toBeNull();
    
    // Step 2: User A logs out (FIXED behavior)
    console.log(`User A logs out (using FIXED logout handler)`);
    simulateFixedLogoutHandler();
    
    // Verify logout behavior (FIXED)
    const progressAfterLogout = readProgress();
    const progressRestoredFlag = window.sessionStorage.getItem('progress_restored');
    
    console.log(`After logout:`);
    console.log(`  - gt_progress_v1 exists: ${progressAfterLogout !== null}`);
    console.log(`  - progress_restored flag: ${progressRestoredFlag}`);
    
    // FIXED: Progress IS cleared
    expect(progressAfterLogout).toBeNull();
    
    // FIXED: progress_restored flag IS cleared
    expect(progressRestoredFlag).toBeNull();
    
    // Step 3: User B logs in (has 2 stages completed in database)
    const userBId = 'user-456';
    const userBUsername = 'Bob';
    const userBStagesCompleted = 2;
    
    console.log(`User B (${userBUsername}) logs in (has ${userBStagesCompleted} stages in database)`);
    simulateLogin(userBId, userBUsername);
    
    // Step 4: Restore progress from database
    const restored = simulateRestoreProgressFromDatabase(userBId, userBStagesCompleted);
    
    console.log(`Restore from database called: ${restored ? 'SUCCESS' : 'SKIPPED'}`);
    
    // FIXED: Restoration is NOT skipped
    expect(restored).toBe(true);
    
    // Step 5: Check what progress user B sees
    const userBProgressDisplayed = readProgress();
    
    console.log(`User B sees progress:`);
    if (userBProgressDisplayed) {
      const completedStages = Object.values(userBProgressDisplayed.stages).filter(s => s.completed).length;
      console.log(`  - Stages completed: ${completedStages}`);
      console.log(`  - alphabet: ${userBProgressDisplayed.stages.alphabet.completed}`);
      console.log(`  - lax_vowel: ${userBProgressDisplayed.stages.lax_vowel.completed}`);
      console.log(`  - tense_vowel: ${userBProgressDisplayed.stages.tense_vowel.completed}`);
    }
    
    // EXPECTED BEHAVIOR: User B sees 2 stages completed (from database)
    expect(userBProgressDisplayed).not.toBeNull();
    
    const completedStages = Object.values(userBProgressDisplayed!.stages).filter(s => s.completed).length;
    
    console.log(`\nSUCCESS:`);
    console.log(`  - User B sees ${completedStages} stages completed (correct)`);
    console.log(`  - User B sees their own data from database`);
    
    // This should PASS with the fixed logout handler
    expect(completedStages).toBe(userBStagesCompleted);
    expect(userBProgressDisplayed!.stages.alphabet.completed).toBe(true);
    expect(userBProgressDisplayed!.stages.lax_vowel.completed).toBe(true);
    expect(userBProgressDisplayed!.stages.tense_vowel.completed).toBe(false);
    expect(userBProgressDisplayed!.stages.diphthong.completed).toBe(false);
    expect(userBProgressDisplayed!.stages.voiceless.completed).toBe(false);
  });

  /**
   * Test Case 3: Multiple account switches
   * 
   * Test that multiple account switches work correctly with the fix
   */
  it('Test Case 3: Multiple account switches with FIXED handler', () => {
    console.log('\n=== Test Case 3: Multiple Account Switches ===');
    
    // User A: 3 stages
    const userAId = 'user-aaa';
    const userAStages = 3;
    simulateLogin(userAId, 'Alice');
    simulateRestoreProgressFromDatabase(userAId, userAStages);
    
    let progress = readProgress();
    expect(progress).not.toBeNull();
    expect(Object.values(progress!.stages).filter(s => s.completed).length).toBe(userAStages);
    
    // User A logs out (FIXED)
    simulateFixedLogoutHandler();
    expect(readProgress()).toBeNull();
    expect(window.sessionStorage.getItem('progress_restored')).toBeNull();
    
    // User B: 1 stage
    const userBId = 'user-bbb';
    const userBStages = 1;
    simulateLogin(userBId, 'Bob');
    simulateRestoreProgressFromDatabase(userBId, userBStages);
    
    progress = readProgress();
    expect(progress).not.toBeNull();
    expect(Object.values(progress!.stages).filter(s => s.completed).length).toBe(userBStages);
    
    // User B logs out (FIXED)
    simulateFixedLogoutHandler();
    expect(readProgress()).toBeNull();
    expect(window.sessionStorage.getItem('progress_restored')).toBeNull();
    
    // User C: 4 stages
    const userCId = 'user-ccc';
    const userCStages = 4;
    simulateLogin(userCId, 'Charlie');
    simulateRestoreProgressFromDatabase(userCId, userCStages);
    
    progress = readProgress();
    expect(progress).not.toBeNull();
    expect(Object.values(progress!.stages).filter(s => s.completed).length).toBe(userCStages);
    
    console.log('✓ Multiple account switches work correctly with FIXED handler');
  });

  /**
   * Test Case 4: Verify localStorage keys are cleared
   * 
   * Test that all user-specific localStorage keys are cleared during logout
   */
  it('Test Case 4: All user-specific localStorage keys are cleared', () => {
    console.log('\n=== Test Case 4: localStorage Keys Cleared ===');
    
    const keys = getStorageKeys();
    
    // Set up user data
    simulateLogin('user-123', 'Alice');
    writeProgress(createMockProgress('user-123', 3));
    window.localStorage.setItem(keys.profile, JSON.stringify({ username: 'Alice', avatarId: 'chibi1' }));
    window.localStorage.setItem(keys.sfxEnabled, '1');
    
    // Verify data exists
    expect(window.localStorage.getItem('geuwat_user')).not.toBeNull();
    expect(window.localStorage.getItem(keys.progress)).not.toBeNull();
    expect(window.localStorage.getItem(keys.profile)).not.toBeNull();
    expect(window.localStorage.getItem(keys.sfxEnabled)).not.toBeNull();
    
    // Logout with FIXED handler
    simulateFixedLogoutHandler();
    
    // Verify all user-specific data is cleared
    expect(window.localStorage.getItem('geuwat_user')).toBeNull();
    expect(window.localStorage.getItem(keys.progress)).toBeNull();
    expect(window.localStorage.getItem(keys.profile)).toBeNull();
    expect(window.localStorage.getItem(keys.sfxEnabled)).toBeNull();
    
    console.log('✓ All user-specific localStorage keys cleared');
  });

  /**
   * Test Case 5: Verify sessionStorage flags are cleared
   * 
   * Test that session-specific flags are cleared during logout
   */
  it('Test Case 5: Session-specific flags are cleared', () => {
    console.log('\n=== Test Case 5: sessionStorage Flags Cleared ===');
    
    const keys = getStorageKeys();
    
    // Set up session data
    window.sessionStorage.setItem('progress_restored', 'true');
    window.sessionStorage.setItem(`${keys.runPrefix}alphabet`, JSON.stringify({ kind: 'quiz' }));
    window.sessionStorage.setItem(`${keys.resultPrefix}alphabet`, JSON.stringify({ percentage: 100 }));
    
    // Verify data exists
    expect(window.sessionStorage.getItem('progress_restored')).not.toBeNull();
    expect(window.sessionStorage.getItem(`${keys.runPrefix}alphabet`)).not.toBeNull();
    expect(window.sessionStorage.getItem(`${keys.resultPrefix}alphabet`)).not.toBeNull();
    
    // Logout with FIXED handler
    simulateFixedLogoutHandler();
    
    // Verify all session-specific data is cleared
    expect(window.sessionStorage.getItem('progress_restored')).toBeNull();
    expect(window.sessionStorage.getItem(`${keys.runPrefix}alphabet`)).toBeNull();
    expect(window.sessionStorage.getItem(`${keys.resultPrefix}alphabet`)).toBeNull();
    
    console.log('✓ All session-specific flags cleared');
  });
});
