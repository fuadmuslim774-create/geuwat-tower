import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../../lib/supabase/server';
import type { StageId } from '../../../../types/geuwat';

type SyncPayload = {
  userId?: string;
  rankStageId?: string;
  timeSec?: number | null;
  journeyStartedAt?: number | null;
  journeyCompletedAt?: number | null;
};

const VALID_STAGE_IDS: StageId[] = [
  'alphabet',
  'lax_vowel',
  'tense_vowel',
  'diphthong',
  'voiceless',
  'voiced',
  'final_s_es',
  'final_d_ed',
  'royal_king',
];

function isValidStageId(value: unknown): value is StageId {
  return typeof value === 'string' && VALID_STAGE_IDS.includes(value as StageId);
}

function validateTimeSec(timeSec: number | null, rankStageId: StageId): boolean {
  // Null is valid for in-progress users
  if (timeSec === null) return true;
  
  // Get stage number (1-9)
  const stageNum = VALID_STAGE_IDS.indexOf(rankStageId) + 1;
  
  // Minimum: 10 seconds per stage (very fast)
  const minTime = stageNum * 10;
  
  // Maximum: 600 seconds (10 minutes) per stage (very slow)
  const maxTime = stageNum * 600;
  
  return timeSec >= minTime && timeSec <= maxTime;
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = (await req.json().catch(() => ({}))) as SyncPayload;
    const { userId, rankStageId, timeSec, journeyStartedAt, journeyCompletedAt } = body;

    // Validate required fields
    if (!userId || typeof userId !== 'string' || userId.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'userId is required and must be a non-empty string.' },
        { status: 400 },
      );
    }

    if (!rankStageId || !isValidStageId(rankStageId)) {
      return NextResponse.json(
        { success: false, error: 'rankStageId is required and must be a valid StageId.' },
        { status: 400 },
      );
    }

    // Validate timeSec (must be non-negative number or null)
    if (timeSec !== null && timeSec !== undefined) {
      if (typeof timeSec !== 'number' || !Number.isFinite(timeSec) || timeSec < 0) {
        return NextResponse.json(
          { success: false, error: 'timeSec must be a non-negative number or null.' },
          { status: 400 },
        );
      }
    }

    // Validate timeSec is within reasonable bounds for the rank stage
    if (timeSec !== null && timeSec !== undefined && !validateTimeSec(timeSec, rankStageId)) {
      console.warn('[leaderboard/sync] timeSec validation failed:', { timeSec, rankStageId, userId });
      return NextResponse.json(
        { success: false, error: 'timeSec value is outside reasonable bounds for the rank stage.' },
        { status: 400 },
      );
    }

    // Get Supabase service role client
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      console.error('[leaderboard/sync] Supabase client not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error: Supabase not available.' },
        { status: 500 },
      );
    }

    // Verify that the profile exists
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', userId)
      .maybeSingle();

    if (profileError) {
      console.error('[leaderboard/sync] Error fetching profile:', profileError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to verify user profile.',
          debug: process.env.NODE_ENV !== 'production' ? { message: profileError.message } : undefined,
        },
        { status: 500 },
      );
    }

    if (!profile) {
      return NextResponse.json(
        { success: false, error: 'User profile not found. Unauthorized.' },
        { status: 401 },
      );
    }

    // Upsert leaderboard entry
    // Convert timeSec to integer for database (null is allowed)
    const timeSecInt = timeSec !== null && timeSec !== undefined ? Math.floor(timeSec) : null;

    // Convert journey timestamps from milliseconds to ISO strings
    const journeyStartedAtISO = journeyStartedAt ? new Date(journeyStartedAt).toISOString() : null;
    const journeyCompletedAtISO = journeyCompletedAt ? new Date(journeyCompletedAt).toISOString() : null;

    const { error: upsertError } = await supabase
      .from('leaderboard_entries')
      .upsert(
        {
          user_id: userId,
          rank_stage_id: rankStageId,
          time_sec: timeSecInt,
          journey_started_at: journeyStartedAtISO,
          journey_completed_at: journeyCompletedAtISO,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'user_id',
        },
      );

    if (upsertError) {
      console.error('[leaderboard/sync] Error upserting leaderboard entry:', upsertError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to sync leaderboard entry.',
          debug: process.env.NODE_ENV !== 'production' ? { message: upsertError.message } : undefined,
        },
        { status: 500 },
      );
    }

    // Success
    return NextResponse.json({
      success: true,
      message: 'Leaderboard entry synced successfully.',
    });
  } catch (error) {
    console.error('[leaderboard/sync] Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred.',
        debug:
          process.env.NODE_ENV !== 'production' && error instanceof Error ? { message: error.message } : undefined,
      },
      { status: 500 },
    );
  }
}
