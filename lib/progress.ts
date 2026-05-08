import type { JourneyProgress, StageId, StageProgress } from '../types/geuwat';
import { STAGE_BY_ID, STAGE_ORDER, getNextStageId } from './stages';
import { readProgress, writeProgress } from './storage';
import { getCurrentUser } from './auth';

function createEmptyStageProgress(isUnlocked: boolean): StageProgress {
  return {
    unlocked: isUnlocked,
    completed: false,
    bestPercentage: 0,
    lastPercentage: 0,
    bestTimeSeconds: null,
    lastTimeSeconds: null,
    attempts: 0,
    lastPlayedAt: null,
  };
}

export function createInitialProgress(): JourneyProgress {
  const stages = Object.fromEntries(
    STAGE_ORDER.map((id, idx) => [id, createEmptyStageProgress(idx === 0)]),
  ) as Record<StageId, StageProgress>;
  return { journeyStartedAt: null, journeyCompletedAt: null, stages };
}

export function getOrInitProgress(): JourneyProgress {
  if (typeof window === 'undefined') return createInitialProgress();
  const existing = readProgress();
  if (!existing) {
    // Return initial progress WITHOUT journeyStartedAt
    // Let the restore process or first stage play set it
    const fresh = createInitialProgress();
    writeProgress(fresh);
    return fresh;
  }

  // Backfill only when needed (prevents event loops and unnecessary writes).
  const base = createInitialProgress();
  let didChange = false;
  const nextStages: Record<StageId, StageProgress> = { ...base.stages };

  const prevStartedAt = typeof (existing as any).journeyStartedAt === 'number' ? (existing as any).journeyStartedAt : null;
  const prevCompletedAt = typeof (existing as any).journeyCompletedAt === 'number' ? (existing as any).journeyCompletedAt : null;

  for (const id of STAGE_ORDER) {
    const prev = existing.stages[id];
    if (!prev) {
      didChange = true;
      continue;
    }

    const mergedStage: StageProgress = { ...base.stages[id], ...prev };
    for (const k of Object.keys(base.stages[id]) as Array<keyof StageProgress>) {
      if (prev[k] === undefined) didChange = true;
    }
    nextStages[id] = mergedStage;
  }

  // Infer missing journeyStartedAt/journeyCompletedAt for older stored progress.
  const playedTimes = STAGE_ORDER.map((id) => nextStages[id]?.lastPlayedAt).filter((t): t is number => typeof t === 'number');
  const inferredStartedAt = playedTimes.length > 0 ? Math.min(...playedTimes) : null; // Changed: Don't use Date.now()
  const inferredCompletedAt = playedTimes.length > 0 ? Math.max(...playedTimes) : null; // Changed: Don't use Date.now()

  const journeyStartedAt = prevStartedAt ?? inferredStartedAt;
  let journeyCompletedAt = prevCompletedAt;
  const isCompleteNow = STAGE_ORDER.every((id) => nextStages[id]?.completed);
  if (journeyCompletedAt === null && isCompleteNow && inferredCompletedAt !== null) {
    journeyCompletedAt = inferredCompletedAt;
  }

  if (prevStartedAt === null && inferredStartedAt !== null) {
    didChange = true;
  }
  if (prevCompletedAt === null && isCompleteNow) didChange = true;

  if (!didChange) return existing as JourneyProgress;

  const merged: JourneyProgress = { journeyStartedAt, journeyCompletedAt, stages: nextStages };
  writeProgress(merged);
  return merged;
}

export function getCompletionTimeSeconds(progress: JourneyProgress, stageId: StageId): number | null {
  const idx = STAGE_ORDER.indexOf(stageId);
  if (idx < 0) return null;
  let total = 0;
  let hasAny = false;
  for (let i = 0; i <= idx; i += 1) {
    const id = STAGE_ORDER[i];
    const sp = progress.stages[id];
    if (!sp?.completed) break;
    if (typeof sp.bestTimeSeconds === 'number') {
      total += sp.bestTimeSeconds;
      hasAny = true;
    }
  }
  return hasAny ? total : null;
}

export function computeOverallCompletion(progress: JourneyProgress): number {
  const total = STAGE_ORDER.length;
  const completed = STAGE_ORDER.filter((id) => progress.stages[id]?.completed).length;
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}

export function isJourneyComplete(progress: JourneyProgress): boolean {
  return STAGE_ORDER.every((id) => progress.stages[id]?.completed);
}

export function getRankLabel(progress: JourneyProgress): string {
  // Rank label follows the highest-cleared stage name (no CADET/ROOKIE tiers).
  const stageId = getRankStageId(progress);
  return STAGE_BY_ID[stageId].title;
}

export function getRankStageId(progress: JourneyProgress): StageId {
  const lastCompleted = [...STAGE_ORDER].reverse().find((id) => progress.stages[id]?.completed);
  return lastCompleted ?? 'alphabet';
}

export function updateOnGameOver(stageId: StageId, percentage: number, durationSeconds: number) {
  const progress = getOrInitProgress();
  const stage = progress.stages[stageId];
  const now = Date.now();
  const nextStage: StageProgress = {
    ...stage,
    attempts: stage.attempts + 1,
    lastPercentage: percentage,
    bestPercentage: Math.max(stage.bestPercentage, percentage),
    lastTimeSeconds: durationSeconds,
    bestTimeSeconds:
      percentage > stage.bestPercentage
        ? durationSeconds
        : percentage === stage.bestPercentage
          ? stage.bestTimeSeconds === null
            ? durationSeconds
            : Math.min(stage.bestTimeSeconds, durationSeconds)
          : stage.bestTimeSeconds,
    lastPlayedAt: now,
  };
  const next: JourneyProgress = {
    ...progress,
    stages: { ...progress.stages, [stageId]: nextStage },
  };
  writeProgress(next);
  window.dispatchEvent(new Event('gt_progress_changed'));
  
  // Sync full progress to database (even for incomplete attempts)
  syncFullProgress(next);
}

export function updateOnStageComplete(stageId: StageId, durationSeconds: number) {
  const progress = getOrInitProgress();
  const stage = progress.stages[stageId];
  const now = Date.now();

  const nextStage: StageProgress = {
    ...stage,
    unlocked: true,
    completed: true,
    attempts: stage.attempts + 1,
    lastPercentage: 100,
    bestPercentage: 100,
    lastTimeSeconds: durationSeconds,
    bestTimeSeconds: stage.bestTimeSeconds === null ? durationSeconds : Math.min(stage.bestTimeSeconds, durationSeconds),
    lastPlayedAt: now,
  };

  let nextStages: Record<StageId, StageProgress> = { ...progress.stages, [stageId]: nextStage };

  const nextId = getNextStageId(stageId);
  if (nextId) {
    const nextStageProgress = nextStages[nextId];
    nextStages = {
      ...nextStages,
      [nextId]: { ...nextStageProgress, unlocked: true },
    };
  }

  const nextProgress: JourneyProgress = {
    ...progress,
    stages: nextStages,
  };
  
  // Set journeyStartedAt ONLY if it's null (first stage completion)
  if (nextProgress.journeyStartedAt === null) {
    nextProgress.journeyStartedAt = now;
    console.log('[updateOnStageComplete] Setting journeyStartedAt for first time:', now);
  }
  
  if (isJourneyComplete(nextProgress) && nextProgress.journeyCompletedAt === null) {
    nextProgress.journeyCompletedAt = now;
  }

  writeProgress(nextProgress);
  window.dispatchEvent(new Event('gt_progress_changed'));

  // Sync leaderboard entry to database
  syncLeaderboardEntry(nextProgress);
  
  // Sync full progress to database
  syncFullProgress(nextProgress);
}

async function syncLeaderboardEntry(progress: JourneyProgress): Promise<boolean> {
  console.log('[syncLeaderboardEntry] Starting sync process');
  
  try {
    // Get current user profile
    const user = getCurrentUser();
    if (!user) {
      console.warn('[syncLeaderboardEntry] No user session found, skipping sync');
      return false;
    }

    console.log('[syncLeaderboardEntry] User session found:', user.id);

    // Calculate completion time in seconds
    const timeSec = getJourneyCompletionTimeSeconds(progress, Date.now());

    // Get highest completed stage
    const rankStageId = getRankStageId(progress);

    // Construct payload with journey timestamps
    const payload = {
      userId: user.id,
      rankStageId,
      timeSec,
      journeyStartedAt: progress.journeyStartedAt,
      journeyCompletedAt: progress.journeyCompletedAt,
    };

    console.log('[syncLeaderboardEntry] Sending payload to API:', payload);

    // Make POST request to sync endpoint
    const response = await fetch('/api/leaderboard/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[syncLeaderboardEntry] API call failed:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
      });
      return false;
    }

    const result = await response.json();
    console.log('[syncLeaderboardEntry] Sync successful:', result);
    return true;
  } catch (error) {
    // Log detailed error information and propagate failure status
    console.error('[syncLeaderboardEntry] Unexpected error during sync:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return false;
  }
}

/**
 * Sync initial journey start timestamp to database
 * Called when user first logs in or when journeyStartedAt is first set
 */
async function syncInitialJourneyStart(progress: JourneyProgress) {
  try {
    // Get current user profile
    const user = getCurrentUser();
    if (!user) {
      console.warn('[syncInitialJourneyStart] No user session found, skipping sync');
      return;
    }

    // Only sync if journeyStartedAt exists
    if (!progress.journeyStartedAt) {
      return;
    }

    // Get highest completed stage (or 'alphabet' if none completed)
    const rankStageId = getRankStageId(progress);

    // Calculate completion time in seconds (will be null if not completed)
    const timeSec = getJourneyCompletionTimeSeconds(progress, Date.now());

    // Construct payload with journey timestamps
    const payload = {
      userId: user.id,
      rankStageId,
      timeSec,
      journeyStartedAt: progress.journeyStartedAt,
      journeyCompletedAt: progress.journeyCompletedAt,
    };

    console.log('[syncInitialJourneyStart] Syncing initial journey start to database:', payload);

    // Make POST request to sync endpoint
    const response = await fetch('/api/leaderboard/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[syncInitialJourneyStart] API call failed:', {
        status: response.status,
        error: errorData,
      });
      return;
    }

    const result = await response.json();
    console.log('[syncInitialJourneyStart] Initial sync successful:', result);
  } catch (error) {
    // Log error but don't block user flow
    console.error('[syncInitialJourneyStart] Unexpected error during sync:', error);
  }
}

/**
 * Sync full progress to database
 * This ensures all stage progress is persisted, not just leaderboard entry
 */
async function syncFullProgress(progress: JourneyProgress) {
  try {
    // Get current user profile
    const user = getCurrentUser();
    if (!user) {
      console.warn('[syncFullProgress] No user session found, skipping sync');
      return;
    }

    // Construct payload
    const payload = {
      userId: user.id,
      progress,
    };

    console.log('[syncFullProgress] Syncing full progress to database');

    // Make POST request to sync endpoint
    const response = await fetch('/api/progress/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[syncFullProgress] API call failed:', {
        status: response.status,
        error: errorData,
      });
      return;
    }

    const result = await response.json();
    console.log('[syncFullProgress] Full progress sync successful:', result);
  } catch (error) {
    // Log error but don't block user flow
    console.error('[syncFullProgress] Unexpected error during sync:', error);
  }
}

export function canPlayStage(stageId: StageId, progress: JourneyProgress): boolean {
  return Boolean(progress.stages[stageId]?.unlocked);
}

export function getJourneyCompletionTimeSeconds(progress: JourneyProgress, nowMs: number): number | null {
  if (progress.journeyStartedAt === null) return null;
  const end = progress.journeyCompletedAt ?? nowMs;
  const diff = Math.max(0, Math.floor((end - progress.journeyStartedAt) / 1000));
  return diff;
}

/**
 * Restore progress from database
 * Called on login to restore progress if local storage is empty
 */
export async function restoreProgressFromDatabase(): Promise<JourneyProgress | null> {
  try {
    const user = getCurrentUser();
    if (!user) {
      console.warn('[restoreProgressFromDatabase] No user session found');
      return null;
    }

    console.log('[restoreProgressFromDatabase] Fetching progress from database');

    const response = await fetch(`/api/progress/sync?userId=${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[restoreProgressFromDatabase] API call failed:', {
        status: response.status,
        error: errorData,
      });
      return null;
    }

    const result = await response.json();
    
    if (result.success && result.progress) {
      console.log('[restoreProgressFromDatabase] Progress restored from database');
      // Write to local storage
      writeProgress(result.progress);
      return result.progress;
    }

    console.log('[restoreProgressFromDatabase] No progress found in database');
    return null;
  } catch (error) {
    console.error('[restoreProgressFromDatabase] Unexpected error:', error);
    return null;
  }
}

/**
 * Initialize journey_started_at on first login if not already set
 * This ensures users appear in leaderboard rankings immediately after login
 * 
 * @returns Promise<boolean> - true if sync completes successfully, false if sync fails or journeyStartedAt is already set
 */
export async function initializeJourneyStartOnFirstLogin(): Promise<boolean> {
  console.log('[initializeJourneyStartOnFirstLogin] Starting initialization process');
  
  try {
    const progress = getOrInitProgress();
    
    // If journey already started, no need to initialize
    if (progress.journeyStartedAt !== null) {
      console.log('[initializeJourneyStartOnFirstLogin] Journey already started, skipping initialization');
      return false;
    }
    
    console.log('[initializeJourneyStartOnFirstLogin] Journey not started, initializing...');
    
    // Set journey_started_at to now
    const now = Date.now();
    const updatedProgress: JourneyProgress = {
      ...progress,
      journeyStartedAt: now,
    };
    
    writeProgress(updatedProgress);
    console.log('[initializeJourneyStartOnFirstLogin] Set journeyStartedAt in local storage:', now);
    
    // Sync to database immediately and check return value
    console.log('[initializeJourneyStartOnFirstLogin] Syncing to database...');
    const syncSuccess = await syncLeaderboardEntry(updatedProgress);
    
    if (!syncSuccess) {
      console.error('[initializeJourneyStartOnFirstLogin] Database sync failed');
      return false;
    }
    
    console.log('[initializeJourneyStartOnFirstLogin] Database sync completed successfully');
    
    // Dispatch event to update UI
    window.dispatchEvent(new Event('gt_progress_changed'));
    
    console.log('[initializeJourneyStartOnFirstLogin] Initialization completed successfully');
    return true;
  } catch (error) {
    console.error('[initializeJourneyStartOnFirstLogin] Unexpected error during initialization:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    });
    return false;
  }
}
