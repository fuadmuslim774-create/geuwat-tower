import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../../lib/supabase/server';

type LogoutBody = {
  userId?: string;
  sessionToken?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as LogoutBody;
    const { userId, sessionToken } = body;

    if (!userId || !sessionToken) {
      return NextResponse.json(
        { success: false, error: 'userId and sessionToken are required' },
        { status: 400 }
      );
    }

    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: 'Supabase not configured' },
        { status: 500 }
      );
    }

    // Verify session token matches (security check) before clearing
    const { data: profile, error: fetchErr } = await supabase
      .from('profiles')
      .select('active_session_token')
      .eq('id', userId)
      .single();

    if (fetchErr) {
      console.error('[logout] Error fetching profile:', fetchErr);
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    // Log warning if token doesn't match, but still proceed with clearing for clean state
    if (profile.active_session_token !== sessionToken) {
      console.warn('[logout] Token mismatch - clearing anyway for clean state', {
        userId,
        providedToken: sessionToken?.substring(0, 8) + '...',
        dbToken: profile.active_session_token?.substring(0, 8) + '...' || 'NULL'
      });
    }

    // Clear ALL session fields (not conditional on token match)
    const { error: updateErr, count } = await supabase
      .from('profiles')
      .update({
        active_session_token: null,
        session_started_at: null,
        last_activity_at: null,
      })
      .eq('id', userId);

    if (updateErr) {
      console.error('[logout] Error clearing session:', updateErr);
      return NextResponse.json(
        { success: false, error: 'Failed to clear session' },
        { status: 500 }
      );
    }

    // Verify update succeeded
    if (count === 0) {
      console.error('[logout] No rows updated for userId:', userId);
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Session cleared successfully'
    });
  } catch (error) {
    console.error('[logout] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Unexpected error' },
      { status: 500 }
    );
  }
}
