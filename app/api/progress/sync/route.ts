import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../../lib/supabase/server';
import type { JourneyProgress } from '../../../../types/geuwat';

type SyncProgressPayload = {
  userId?: string;
  progress?: JourneyProgress;
};

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = (await req.json().catch(() => ({}))) as SyncProgressPayload;
    const { userId, progress } = body;

    // Validate required fields
    if (!userId || typeof userId !== 'string' || userId.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'userId is required and must be a non-empty string.' },
        { status: 400 },
      );
    }

    if (!progress || typeof progress !== 'object') {
      return NextResponse.json(
        { success: false, error: 'progress is required and must be an object.' },
        { status: 400 },
      );
    }

    // Get Supabase service role client
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      console.error('[progress/sync] Supabase client not configured');
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
      console.error('[progress/sync] Error fetching profile:', profileError);
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

    // Store progress as JSONB in a new table (we'll need to create this table)
    // For now, we'll use the existing leaderboard_entries table and add a progress_data column
    // Or we can create a new user_progress table
    
    // Upsert progress data
    const { error: upsertError } = await supabase
      .from('user_progress')
      .upsert(
        {
          user_id: userId,
          progress_data: progress,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'user_id',
        },
      );

    if (upsertError) {
      console.error('[progress/sync] Error upserting progress:', upsertError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to sync progress.',
          debug: process.env.NODE_ENV !== 'production' ? { message: upsertError.message } : undefined,
        },
        { status: 500 },
      );
    }

    // Success
    return NextResponse.json({
      success: true,
      message: 'Progress synced successfully.',
    });
  } catch (error) {
    console.error('[progress/sync] Unexpected error:', error);
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

export async function GET(req: Request) {
  try {
    // Get userId from query params
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId || typeof userId !== 'string' || userId.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'userId is required in query params.' },
        { status: 400 },
      );
    }

    // Get Supabase service role client
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      console.error('[progress/sync] Supabase client not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error: Supabase not available.' },
        { status: 500 },
      );
    }

    // Fetch progress from database
    const { data, error } = await supabase
      .from('user_progress')
      .select('progress_data')
      .eq('user_id', userId)
      .maybeSingle();

    if (error) {
      console.error('[progress/sync] Error fetching progress:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to fetch progress.',
          debug: process.env.NODE_ENV !== 'production' ? { message: error.message } : undefined,
        },
        { status: 500 },
      );
    }

    if (!data) {
      return NextResponse.json({
        success: true,
        progress: null,
        message: 'No progress found for this user.',
      });
    }

    // Success
    return NextResponse.json({
      success: true,
      progress: data.progress_data,
    });
  } catch (error) {
    console.error('[progress/sync] Unexpected error:', error);
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
