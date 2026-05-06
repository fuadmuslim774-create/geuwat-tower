import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../../lib/supabase/server';

type HeartbeatBody = {
  userId?: string;
  sessionToken?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as HeartbeatBody;
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

    // Check if session token matches
    const { data: profile, error: fetchErr } = await supabase
      .from('profiles')
      .select('id, active_session_token, session_started_at')
      .eq('id', userId)
      .maybeSingle();

    if (fetchErr) {
      console.error('[heartbeat] Error fetching profile:', fetchErr);
      return NextResponse.json(
        { success: false, error: 'Failed to verify session', sessionValid: false },
        { status: 500 }
      );
    }

    // Check if session has expired (24 hours from session_started_at)
    if (profile?.session_started_at) {
      const sessionStarted = new Date(profile.session_started_at).getTime();
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (now - sessionStarted >= twentyFourHours) {
        // Session expired (24 hours), auto-clear it and reject heartbeat
        console.log('[heartbeat] Session expired (24 hours), clearing session for user:', userId);
        await supabase
          .from('profiles')
          .update({
            active_session_token: null,
            session_started_at: null,
            last_activity_at: null,
          })
          .eq('id', userId);
        
        return NextResponse.json(
          { 
            success: false, 
            error: 'Session expired (24 hours) - please login again',
            sessionValid: false,
            code: 'SESSION_EXPIRED'
          },
          { status: 401 }
        );
      }
    }

    if (!profile || profile.active_session_token !== sessionToken) {
      // Session token doesn't match - user was kicked or logged in elsewhere
      return NextResponse.json(
        { 
          success: false, 
          error: 'Session invalid - account is being used elsewhere',
          sessionValid: false,
          code: 'SESSION_INVALID'
        },
        { status: 401 }
      );
    }

    // Update last activity timestamp
    const { error: updateErr } = await supabase
      .from('profiles')
      .update({ last_activity_at: new Date().toISOString() })
      .eq('id', userId)
      .eq('active_session_token', sessionToken); // Double-check token hasn't changed

    if (updateErr) {
      console.error('[heartbeat] Error updating last activity:', updateErr);
      return NextResponse.json(
        { success: false, error: 'Failed to update activity', sessionValid: true },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      sessionValid: true,
      message: 'Session refreshed'
    });
  } catch (error) {
    console.error('[heartbeat] Unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Unexpected error', sessionValid: false },
      { status: 500 }
    );
  }
}
