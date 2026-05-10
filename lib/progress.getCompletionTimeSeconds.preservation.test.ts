/**
 * Preservation Property Tests for getCompletionTimeSeconds()
 * 
 * Property 2: Preservation - Complete Journey Calculation Unchanged
 * 
 * IMPORTANT: Follow observation-first methodology
 * These tests capture baseline behavior on UNFIXED code that must be preserved after fix
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6
 */

import { describe, it, expect } from 'vitest';
import { getCompletionTimeSeconds, createInitialProgress, isJourneyComplete } from './progress';
import type { JourneyProgress } from '../types/geuwat';
import { STAGE_ORDER } from './stages';

describe('getCompletionTimeSeconds - Preservation Tests', () => {
  /**
   * Helper function to create progress with all stages completed
   */
  function createCompleteJourneyProgress(bestTimes: number[]): JourneyProgress {
    const progress = createInitialProgress();
    progress.journeyStartedAt = Date.now() - 1000000; // Started some time ago
    
    for (let idx = 0; idx < STAGE_ORDER.length; idx++) {
      const stageId = STAGE_ORDER[idx];
      progress.stages[stageId] = {
        unlocked: true,
        completed: true,
        bestPercentage: 100,
        lastPercentage: 100,
        bestTimeSeconds: bestTimes[idx],
        lastTimeSeconds: bestTimes[idx],
        attempts: 1,
        lastPlayedAt: Date.now(),
      };
    }
    
    progress.journeyCompletedAt = Date.now();
    
    return progress;
  }

  it('Preservation Case 1: Complete journey with uniform times - should return sum of best times', () => {
    // Arrange: All 9 stages completed with 60 seconds each
    const bestTimes = [60, 60, 60, 60, 60, 60, 60, 60, 60];
    const progress = createCompleteJourneyProgress(bestTimes);
    
    // Verify journey is complete
    expect(isJourneyComplete(progress)).toBe(true);
    
    // Act: Get completion time for royal_king (last stage)
    const result = getCompletionTimeSeconds(progress, 'royal_king');
    
    // Assert: Should return sum of all best times (9 × 60 = 540)
    // This behavior MUST be preserved after fix
    expect(result).toBe(540);
  });

  it('Preservation Case 2: Complete journey with varying times - should return sum of best times', () => {
    // Arrange: All 9 stages completed with different times
    const bestTimes = [45, 50, 55, 60, 65, 70, 75, 80, 85];
    const progress = createCompleteJourneyProgress(bestTimes);
    
    // Verify journey is complete
    expect(isJourneyComplete(progress)).toBe(true);
    
    // Act: Get completion time for royal_king (last stage)
    const result = getCompletionTimeSeconds(progress, 'royal_king');
    
    // Assert: Should return sum of all best times (45+50+55+60+65+70+75+80+85 = 585)
    // This behavior MUST be preserved after fix
    expect(result).toBe(585);
  });

  it('Preservation Case 3: Complete journey queried at intermediate stage - should return sum up to that stage', () => {
    // Arrange: All 9 stages completed
    const bestTimes = [60, 60, 60, 60, 60, 60, 60, 60, 60];
    const progress = createCompleteJourneyProgress(bestTimes);
    
    // Verify journey is complete
    expect(isJourneyComplete(progress)).toBe(true);
    
    // Act: Get completion time for voiced (stage 6, index 5)
    const result = getCompletionTimeSeconds(progress, 'voiced');
    
    // Assert: Should return sum of best times up to voiced (6 × 60 = 360)
    // This behavior MUST be preserved after fix
    expect(result).toBe(360);
  });

  it('Preservation Case 4: Complete journey with fast times - should return sum of best times', () => {
    // Arrange: All 9 stages completed with fast times (30 seconds each)
    const bestTimes = [30, 30, 30, 30, 30, 30, 30, 30, 30];
    const progress = createCompleteJourneyProgress(bestTimes);
    
    // Verify journey is complete
    expect(isJourneyComplete(progress)).toBe(true);
    
    // Act: Get completion time for royal_king (last stage)
    const result = getCompletionTimeSeconds(progress, 'royal_king');
    
    // Assert: Should return sum of all best times (9 × 30 = 270)
    // This behavior MUST be preserved after fix
    expect(result).toBe(270);
  });

  it('Preservation Case 5: Complete journey with slow times - should return sum of best times', () => {
    // Arrange: All 9 stages completed with slow times (120 seconds each)
    const bestTimes = [120, 120, 120, 120, 120, 120, 120, 120, 120];
    const progress = createCompleteJourneyProgress(bestTimes);
    
    // Verify journey is complete
    expect(isJourneyComplete(progress)).toBe(true);
    
    // Act: Get completion time for royal_king (last stage)
    const result = getCompletionTimeSeconds(progress, 'royal_king');
    
    // Assert: Should return sum of all best times (9 × 120 = 1080)
    // This behavior MUST be preserved after fix
    expect(result).toBe(1080);
  });

  it('Preservation Case 6: Complete journey queried at first stage - should return first stage time', () => {
    // Arrange: All 9 stages completed
    const bestTimes = [45, 50, 55, 60, 65, 70, 75, 80, 85];
    const progress = createCompleteJourneyProgress(bestTimes);
    
    // Verify journey is complete
    expect(isJourneyComplete(progress)).toBe(true);
    
    // Act: Get completion time for alphabet (stage 1, index 0)
    const result = getCompletionTimeSeconds(progress, 'alphabet');
    
    // Assert: Should return just the first stage time (45)
    // This behavior MUST be preserved after fix
    expect(result).toBe(45);
  });

  it('Preservation Case 7: Complete journey queried at middle stage - should return sum up to that stage', () => {
    // Arrange: All 9 stages completed
    const bestTimes = [40, 45, 50, 55, 60, 65, 70, 75, 80];
    const progress = createCompleteJourneyProgress(bestTimes);
    
    // Verify journey is complete
    expect(isJourneyComplete(progress)).toBe(true);
    
    // Act: Get completion time for diphthong (stage 4, index 3)
    const result = getCompletionTimeSeconds(progress, 'diphthong');
    
    // Assert: Should return sum of best times up to diphthong (40+45+50+55 = 190)
    // This behavior MUST be preserved after fix
    expect(result).toBe(190);
  });
});
