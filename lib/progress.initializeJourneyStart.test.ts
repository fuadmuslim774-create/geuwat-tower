import { describe, expect, it, beforeEach, vi } from 'vitest';
import { initializeJourneyStartOnFirstLogin } from './progress';
import * as storage from './storage';
import * as auth from './auth';

/**
 * Unit tests for initializeJourneyStartOnFirstLogin function
 * 
 * **Validates: Requirements 2.1, 2.2, 2.3**
 * 
 * Tests that the function:
 * - Returns true on successful sync
 * - Returns false if journeyStartedAt is already set
 * - Returns false if sync fails
 */

describe('initializeJourneyStartOnFirstLogin', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    sessionStorage.clear();
    
    // Reset all mocks
    vi.clearAllMocks();
  });

  it('should return false if journeyStartedAt is already set', async () => {
    // Setup: User with existing journeyStartedAt
    const existingProgress = {
      journeyStartedAt: Date.now() - 1000,
      journeyCompletedAt: null,
      stages: {},
    };
    
    localStorage.setItem('gt_progress_v1', JSON.stringify(existingProgress));
    
    // Mock getCurrentUser to return a user
    vi.spyOn(auth, 'getCurrentUser').mockReturnValue({
      id: 'test-user-id',
      username: 'testuser',
      avatarId: 1,
    });
    
    // Execute
    const result = await initializeJourneyStartOnFirstLogin();
    
    // Verify: Should return false (skip initialization)
    expect(result).toBe(false);
  });

  it('should return true on successful sync', async () => {
    // Setup: User without journeyStartedAt
    const initialProgress = {
      journeyStartedAt: null,
      journeyCompletedAt: null,
      stages: {},
    };
    
    localStorage.setItem('gt_progress_v1', JSON.stringify(initialProgress));
    
    // Mock getCurrentUser to return a user
    vi.spyOn(auth, 'getCurrentUser').mockReturnValue({
      id: 'test-user-id',
      username: 'testuser',
      avatarId: 1,
    });
    
    // Mock fetch to simulate successful API call
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    
    // Execute
    const result = await initializeJourneyStartOnFirstLogin();
    
    // Verify: Should return true (successful sync)
    expect(result).toBe(true);
    
    // Verify: journeyStartedAt should be set in localStorage
    const updatedProgress = JSON.parse(localStorage.getItem('gt_progress_v1') || '{}');
    expect(updatedProgress.journeyStartedAt).not.toBeNull();
    expect(typeof updatedProgress.journeyStartedAt).toBe('number');
  });

  it('should return false if sync fails', async () => {
    // Setup: User without journeyStartedAt
    const initialProgress = {
      journeyStartedAt: null,
      journeyCompletedAt: null,
      stages: {},
    };
    
    localStorage.setItem('gt_progress_v1', JSON.stringify(initialProgress));
    
    // Mock getCurrentUser to return a user
    vi.spyOn(auth, 'getCurrentUser').mockReturnValue({
      id: 'test-user-id',
      username: 'testuser',
      avatarId: 1,
    });
    
    // Mock fetch to simulate failed API call
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: async () => ({ error: 'Database error' }),
    });
    
    // Execute
    const result = await initializeJourneyStartOnFirstLogin();
    
    // Verify: Should return false (sync failed)
    expect(result).toBe(false);
  });

  it('should return false if no user session exists', async () => {
    // Setup: User without journeyStartedAt
    const initialProgress = {
      journeyStartedAt: null,
      journeyCompletedAt: null,
      stages: {},
    };
    
    localStorage.setItem('gt_progress_v1', JSON.stringify(initialProgress));
    
    // Mock getCurrentUser to return null (no session)
    vi.spyOn(auth, 'getCurrentUser').mockReturnValue(null);
    
    // Execute
    const result = await initializeJourneyStartOnFirstLogin();
    
    // Verify: Should return false (no user session)
    expect(result).toBe(false);
  });

  it('should return false on network error', async () => {
    // Setup: User without journeyStartedAt
    const initialProgress = {
      journeyStartedAt: null,
      journeyCompletedAt: null,
      stages: {},
    };
    
    localStorage.setItem('gt_progress_v1', JSON.stringify(initialProgress));
    
    // Mock getCurrentUser to return a user
    vi.spyOn(auth, 'getCurrentUser').mockReturnValue({
      id: 'test-user-id',
      username: 'testuser',
      avatarId: 1,
    });
    
    // Mock fetch to simulate network error
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
    
    // Execute
    const result = await initializeJourneyStartOnFirstLogin();
    
    // Verify: Should return false (network error)
    expect(result).toBe(false);
  });
});
