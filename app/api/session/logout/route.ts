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

    // Clear session token from database
    const { error: updateErr } = await supabase
      .from('profiles')
      .update({
        active_session_token: null,
        last_activity_at: null,
      })
      .eq('id', userId)
      .eq('active_session_token', sessionToken); // Only clear if token matches

    if (updateErr) {
      console.error('[logout] Error clearing session:', updateErr);
      return NextResponse.json(
        { success: false, error: 'Failed to clear session' },
        { status: 500 }
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
