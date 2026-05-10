import type { AvatarId, StageId } from '../../types/geuwat';
import { STAGE_BY_ID } from '../stages';
import { formatHMS } from '../leaderboard';
import { getSupabaseBrowserClient } from './browser';
import { readProgress, writeProgress } from '../storage';
import { getCurrentUser } from '../auth';

export type SupabaseRankRow = {
  id: string;
  player: string;
  avatarId: AvatarId;
  rank: string;
  time: string;
  highlight?: boolean;
};

type GlobalRankRecord = {
  user_id: string;
  username: string;
  avatar_id: AvatarId;
  batch_id: string | null;
  rank_stage_id: StageId | null;
  time_sec: number | null;
  journey_started_at: string | null;
  journey_completed_at: string | null;
};

async function fetchRanksBase({
  page,
  pageSize,
  currentUserId,
  batchId,
}: {
  page: number;
  pageSize: number;
  currentUserId?: string;
  batchId?: string | null;
}): Promise<{ rows: SupabaseRankRow[]; total: number; totalPages: number; page: number; pageSize: number }> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return { rows: [], total: 0, totalPages: 1, page, pageSize };

  const safePageSize = Number.isFinite(pageSize) && pageSize > 0 ? Math.floor(pageSize) : 10;
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
  const from = (safePage - 1) * safePageSize;
  const to = from + safePageSize - 1;

  let query = supabase
    .from('v_global_ranks_ordered')
    .select('user_id, username, avatar_id, batch_id, rank_stage_id, time_sec, journey_started_at, journey_completed_at', { count: 'exact' });

  if (typeof batchId === 'string' && batchId.length > 0) query = query.eq('batch_id', batchId);

  const { data, count, error } = await query.range(from, to);

  if (error || !data) return { rows: [], total: 0, totalPages: 1, page: safePage, pageSize: safePageSize };

  // Sync current user's journey timestamps from database to local storage
  if (currentUserId) {
    const currentUserData = (data as GlobalRankRecord[]).find(r => r.user_id === currentUserId);
    if (currentUserData?.journey_started_at) {
      syncJourneyTimestampsToLocalStorage(currentUserData);
    }
  }

  const total = count ?? data.length;
  const totalPages = Math.max(1, Math.ceil(total / safePageSize));
  const clampedPage = Math.min(totalPages, safePage);

  const rows = (data as GlobalRankRecord[]).map((r) => {
    const stageId = (r.rank_stage_id ?? 'alphabet') as StageId;
    
    // Calculate time display
    let timeDisplay = '--:--:--';
    
    if (typeof r.time_sec === 'number') {
      // User has time_sec (sum of best stage times) - show it
      timeDisplay = formatHMS(r.time_sec);
    }
    // else: user hasn't completed any stages or has no time recorded, keep "--:--:--"
    
    return {
      id: r.user_id,
      player: r.username,
      avatarId: r.avatar_id,
      rank: STAGE_BY_ID[stageId].title,
      time: timeDisplay,
      highlight: currentUserId ? r.user_id === currentUserId : false,
    };
  });

  return { rows, total, totalPages, page: clampedPage, pageSize: safePageSize };
}

/**
 * Sync journey timestamps from database to local storage
 * This ensures timer persists across login sessions
 */
function syncJourneyTimestampsToLocalStorage(dbData: GlobalRankRecord) {
  try {
    const progress = readProgress();
    if (!progress) return;

    let needsUpdate = false;
    const updates: Partial<typeof progress> = {};

    // If database has journey_started_at but local storage doesn't, sync it
    if (dbData.journey_started_at && !progress.journeyStartedAt) {
      updates.journeyStartedAt = new Date(dbData.journey_started_at).getTime();
      needsUpdate = true;
      console.log('[syncJourneyTimestamps] Synced journeyStartedAt from DB to local storage:', updates.journeyStartedAt);
    }

    // If database has journey_completed_at but local storage doesn't, sync it
    if (dbData.journey_completed_at && !progress.journeyCompletedAt) {
      updates.journeyCompletedAt = new Date(dbData.journey_completed_at).getTime();
      needsUpdate = true;
      console.log('[syncJourneyTimestamps] Synced journeyCompletedAt from DB to local storage:', updates.journeyCompletedAt);
    }

    if (needsUpdate) {
      const updatedProgress = { ...progress, ...updates };
      writeProgress(updatedProgress);
      console.log('[syncJourneyTimestamps] Local storage updated with DB timestamps');
    }
  } catch (error) {
    console.error('[syncJourneyTimestamps] Error syncing timestamps:', error);
  }
}

export async function fetchGlobalRanks(args: { page: number; pageSize: number; currentUserId?: string }) {
  return fetchRanksBase({ ...args });
}

export async function fetchBatchRanks(args: { page: number; pageSize: number; currentUserId?: string; batchId: string }) {
  return fetchRanksBase({ ...args, batchId: args.batchId });
}

export async function fetchBatches(): Promise<Array<{ id: string; title: string }>> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return [];
  const { data, error } = await supabase.from('batches').select('id, title').order('created_at', { ascending: true });
  if (error || !data) return [];
  return data as Array<{ id: string; title: string }>;
}

export async function fetchIsCurrentPlayerGreatestKing(currentUserId: string): Promise<boolean> {
  const supabase = getSupabaseBrowserClient();
  if (!supabase) return false;
  const { data, error } = await supabase
    .from('v_global_ranks_ordered')
    .select('user_id, rank_stage_id')
    .range(0, 0)
    .maybeSingle();
  if (error || !data) return false;
  const top = data as { user_id: string; rank_stage_id: StageId | null };
  return top.user_id === currentUserId && top.rank_stage_id === 'royal_king';
}

/**
 * Fetch per-stage leaderboard rankings
 * @param stageId - The stage to fetch rankings for
 * @param page - Page number (1-indexed)
 * @param pageSize - Number of results per page
 * @param currentUserId - Optional user ID to highlight
 * @param batchId - Optional batch ID to filter by generation
 * @returns Paginated ranking data
 */
export async function fetchPerStageRanks(args: {
  stageId: StageId;
  page: number;
  pageSize: number;
  currentUserId?: string;
  batchId?: string | null;
}): Promise<{
  rows: SupabaseRankRow[];
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
}> {
  const { stageId, page, pageSize, currentUserId, batchId } = args;
  
  const supabase = getSupabaseBrowserClient();
  if (!supabase) {
    return { rows: [], total: 0, totalPages: 1, page, pageSize };
  }

  // Validate and sanitize inputs
  const safePageSize = Number.isFinite(pageSize) && pageSize > 0 ? Math.floor(pageSize) : 10;
  const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
  const from = (safePage - 1) * safePageSize;
  const to = from + safePageSize - 1;

  try {
    // Build the query to extract bestTimeSeconds from JSONB
    let query = supabase
      .from('user_progress')
      .select(`
        user_id,
        progress_data,
        profiles!inner(
          id,
          username,
          avatar_id,
          batch_id
        )
      `, { count: 'exact' });

    // Filter by batch_id if provided
    if (typeof batchId === 'string' && batchId.length > 0) {
      query = query.eq('profiles.batch_id', batchId);
    }

    // Execute query
    const { data, count, error } = await query;

    if (error) {
      console.error('[fetchPerStageRanks] Database error:', error);
      return { rows: [], total: 0, totalPages: 1, page: safePage, pageSize: safePageSize };
    }

    if (!data || data.length === 0) {
      return { rows: [], total: 0, totalPages: 1, page: safePage, pageSize: safePageSize };
    }

    // Extract and filter users who have completed the selected stage
    type UserStageData = {
      user_id: string;
      username: string;
      avatar_id: AvatarId;
      batch_id: string | null;
      stage_time_sec: number;
    };

    const usersWithStageTime: UserStageData[] = [];

    for (const row of data as any[]) {
      const progressData = row.progress_data;
      const profile = Array.isArray(row.profiles) ? row.profiles[0] : row.profiles;
      
      if (!profile || !progressData?.stages?.[stageId]) continue;

      const stageProgress = progressData.stages[stageId];
      const bestTimeSeconds = stageProgress?.bestTimeSeconds;
      const completed = stageProgress?.completed;

      // Only include users who have COMPLETED the stage with 100%
      // bestTimeSeconds can be set even for incomplete attempts (game over)
      // so we must check completed flag
      if (completed === true && typeof bestTimeSeconds === 'number' && bestTimeSeconds > 0) {
        usersWithStageTime.push({
          user_id: row.user_id,
          username: profile.username,
          avatar_id: profile.avatar_id,
          batch_id: profile.batch_id,
          stage_time_sec: bestTimeSeconds,
        });
      }
    }

    // Sort by stage time ascending, then by username ascending
    usersWithStageTime.sort((a, b) => {
      if (a.stage_time_sec !== b.stage_time_sec) {
        return a.stage_time_sec - b.stage_time_sec;
      }
      return a.username.localeCompare(b.username);
    });

    // Calculate pagination
    const total = usersWithStageTime.length;
    const totalPages = Math.max(1, Math.ceil(total / safePageSize));
    const clampedPage = Math.min(totalPages, safePage);

    // Get the page slice
    const pageData = usersWithStageTime.slice(from, to + 1);

    // Transform to SupabaseRankRow format
    const rows: SupabaseRankRow[] = pageData.map((user) => ({
      id: user.user_id,
      player: user.username,
      avatarId: user.avatar_id,
      rank: STAGE_BY_ID[stageId].title,
      time: formatHMS(user.stage_time_sec),
      highlight: currentUserId ? user.user_id === currentUserId : false,
    }));

    return {
      rows,
      total,
      totalPages,
      page: clampedPage,
      pageSize: safePageSize,
    };
  } catch (err) {
    console.error('[fetchPerStageRanks] Unexpected error:', err);
    return { rows: [], total: 0, totalPages: 1, page: safePage, pageSize: safePageSize };
  }
}
