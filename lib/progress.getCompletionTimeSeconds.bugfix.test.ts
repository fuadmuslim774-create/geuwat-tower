/**
 * Bug Condition Exploration Test for getCompletionTimeSeconds()
 * 
 * Property 1: Bug Condition - Incomplete Journey Returns Non-Null Completion Time
 * 
 * CRITICAL: This test MUST FAIL on unfixed code - failure confirms the bug exists
 * DO NOT attempt to fix the test or the code when it fails
 * 
 * This test encodes the expected behavior - it will validate the fix when it passes after implementation
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.4
 */

import { describe, it, expect } from 'vitest';
import { getCompletionTimeSeconds, createInitialProgress, isJourneyComplete } from './progress';
import type { JourneyProgress, StageId } from '../types/geuwat';
import { STAGE_ORDER } from './stages';

describe('getCompletionTimeSeconds - Bug Condition Exploration', () => {
  /**
   * Helper function to create progress with specific stages completed
   */
  function createProgressWithCompletedStages(completedStageIndices: number[]): JourneyProgress {
    const progress = createInitialProgress();
    progress.journeyStartedAt = Date.now() - 1000000; // Started some time ago
    
    for (const idx of completedStageIndices) {
      const stageId = STAGE_ORDER[idx];
      progress.stages[stageId] = {
        unlocked: true,
        completed: true,
        bestPercentage: 100,
        lastPercentage: 100,
        bestTimeSeconds: 60, // 60 seconds per stage
        lastTimeSeconds: 60,
        attempts: 1,
        lastPlayedAt: Date.now(),
      };
      
      // Unlock next stage
      if (idx + 1 < STAGE_ORDER.length) {
        const nextStageId = STAGE_ORDER[idx + 1];
        progress.stages[nextStageId].unlocked = true;
      }
    }
    
    return progress;
  }

  it('Bug Case 1: User completes stages 1-7 (100%), stage 8 incomplete - should return null for incomplete journey', () => {
    // Arrange: Create progress with stages 0-6 completed (alphabet through final_s_es)
    const progress = createProgressWithCompletedStages([0, 1, 2, 3, 4, 5, 6]);
    
    // Stage 8 (final_d_ed) is unlocked but not completed (game over scenario)
    progress.stages['final_d_ed'].unlocked = true;
    progress.stages['final_d_ed'].completed = false;
    progress.stages['final_d_ed'].bestPercentage = 80; // Failed at 80%
    progress.stages['final_d_ed'].lastPercentage = 80;
    progress.stages['final_d_ed'].attempts = 1;
    
    // Verify journey is incomplete
    expect(isJourneyComplete(progress)).toBe(false);
    
    // Act: Get completion time for highest completed stage (voiced)
    const result = getCompletionTimeSeconds(progress, 'voiced');
    
    // Assert: Should return null because journey is incomplete
    // EXPECTED ON UNFIXED CODE: This will FAIL (returns non-null value like 420)
    // EXPECTED AFTER FIX: This will PASS (returns null)
    expect(result).toBeNull();
  });

  it('Bug Case 2: User completes stages 1-3 (100%), stages 4-9 not attempted - should return null for incomplete journey', () => {
    // Arrange: Create progress with stages 0-2 completed (alphabet, lax_vowel, tense_vowel)
    const progress = createProgressWithCompletedStages([0, 1, 2]);
    
    // Verify journey is incomplete
    expect(isJourneyComplete(progress)).toBe(false);
    
    // Act: Get completion time for highest completed stage (tense_vowel)
    const result = getCompletionTimeSeconds(progress, 'tense_vowel');
    
    // Assert: Should return null because journey is incomplete
    // EXPECTED ON UNFIXED CODE: This will FAIL (returns non-null value like 180)
    // EXPECTED AFTER FIX: This will PASS (returns null)
    expect(result).toBeNull();
  });

  it('Bug Case 3: User completes stages 1-8 (100%), stage 9 unlocked but not attempted - should return null for incomplete journey', () => {
    // Arrange: Create progress with stages 0-7 completed (all except royal_king)
    const progress = createProgressWithCompletedStages([0, 1, 2, 3, 4, 5, 6, 7]);
    
    // Stage 9 (royal_king) is unlocked but not attempted
    progress.stages['royal_king'].unlocked = true;
    progress.stages['royal_king'].completed = false;
    
    // Verify journey is incomplete
    expect(isJourneyComplete(progress)).toBe(false);
    
    // Act: Get completion time for highest completed stage (final_d_ed)
    const result = getCompletionTimeSeconds(progress, 'final_d_ed');
    
    // Assert: Should return null because journey is incomplete
    // EXPECTED ON UNFIXED CODE: This will FAIL (returns non-null value like 480)
    // EXPECTED AFTER FIX: This will PASS (returns null)
    expect(result).toBeNull();
  });

  it('Bug Case 4: User completes stages 1-5 (100%), stages 6-9 not attempted - should return null for incomplete journey', () => {
    // Arrange: Create progress with stages 0-4 completed (alphabet through voiceless)
    const progress = createProgressWithCompletedStages([0, 1, 2, 3, 4]);
    
    // Verify journey is incomplete
    expect(isJourneyComplete(progress)).toBe(false);
    
    // Act: Get completion time for highest completed stage (voiceless)
    const result = getCompletionTimeSeconds(progress, 'voiceless');
    
    // Assert: Should return null because journey is incomplete
    // EXPECTED ON UNFIXED CODE: This will FAIL (returns non-null value like 300)
    // EXPECTED AFTER FIX: This will PASS (returns null)
    expect(result).toBeNull();
  });
});
