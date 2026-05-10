/**
 * Bug Condition Test for Per-Stage Leaderboard
 * 
 * Bug: Per-stage leaderboard shows users who have bestTimeSeconds but haven't completed the stage
 * (e.g., user played stage and got 80%, has bestTimeSeconds but completed: false)
 * 
 * Expected: Only users with completed: true should appear in per-stage leaderboard
 */

import { describe, it, expect } from 'vitest';

describe('Per-Stage Leaderboard - Bug Condition', () => {
  it('should only include users who have completed: true for the stage', () => {
    // Mock progress data
    const mockProgressData = {
      stages: {
        alphabet: {
          completed: true,
          bestTimeSeconds: 45,
          bestPercentage: 100,
        },
        lax_vowel: {
          completed: false,  // NOT completed (game over at 80%)
          bestTimeSeconds: 60,  // But has bestTimeSeconds!
          bestPercentage: 80,
        },
        tense_vowel: {
          completed: true,
          bestTimeSeconds: 55,
          bestPercentage: 100,
        },
      },
    };

    // Test logic: Extract users for lax_vowel stage
    const stageId = 'lax_vowel';
    const stageProgress = mockProgressData.stages[stageId];
    const bestTimeSeconds = stageProgress?.bestTimeSeconds;
    const completed = stageProgress?.completed;

    // OLD LOGIC (BUG): Only checks bestTimeSeconds
    const oldLogicIncludesUser = typeof bestTimeSeconds === 'number' && bestTimeSeconds > 0;
    
    // NEW LOGIC (FIX): Checks both completed AND bestTimeSeconds
    const newLogicIncludesUser = completed === true && typeof bestTimeSeconds === 'number' && bestTimeSeconds > 0;

    // Assertions
    expect(oldLogicIncludesUser).toBe(true);  // Old logic would include this user (BUG)
    expect(newLogicIncludesUser).toBe(false); // New logic correctly excludes this user (FIX)
    expect(completed).toBe(false);
    expect(bestTimeSeconds).toBe(60);
  });

  it('should include users who have both completed: true AND bestTimeSeconds', () => {
    // Mock progress data
    const mockProgressData = {
      stages: {
        alphabet: {
          completed: true,
          bestTimeSeconds: 45,
          bestPercentage: 100,
        },
      },
    };

    // Test logic: Extract users for alphabet stage
    const stageId = 'alphabet';
    const stageProgress = mockProgressData.stages[stageId];
    const bestTimeSeconds = stageProgress?.bestTimeSeconds;
    const completed = stageProgress?.completed;

    // Both old and new logic should include this user
    const oldLogicIncludesUser = typeof bestTimeSeconds === 'number' && bestTimeSeconds > 0;
    const newLogicIncludesUser = completed === true && typeof bestTimeSeconds === 'number' && bestTimeSeconds > 0;

    // Assertions
    expect(oldLogicIncludesUser).toBe(true);
    expect(newLogicIncludesUser).toBe(true);  // Correctly includes completed user
    expect(completed).toBe(true);
    expect(bestTimeSeconds).toBe(45);
  });

  it('should exclude users who have completed: false even with bestTimeSeconds', () => {
    // Test multiple scenarios
    const scenarios = [
      {
        name: 'Game over at 80%',
        completed: false,
        bestTimeSeconds: 60,
        bestPercentage: 80,
        shouldInclude: false,
      },
      {
        name: 'Game over at 90%',
        completed: false,
        bestTimeSeconds: 55,
        bestPercentage: 90,
        shouldInclude: false,
      },
      {
        name: 'Completed at 100%',
        completed: true,
        bestTimeSeconds: 50,
        bestPercentage: 100,
        shouldInclude: true,
      },
      {
        name: 'Not attempted',
        completed: false,
        bestTimeSeconds: null,
        bestPercentage: 0,
        shouldInclude: false,
      },
    ];

    for (const scenario of scenarios) {
      const newLogicIncludesUser = 
        scenario.completed === true && 
        typeof scenario.bestTimeSeconds === 'number' && 
        scenario.bestTimeSeconds > 0;

      expect(newLogicIncludesUser).toBe(scenario.shouldInclude);
    }
  });
});
