import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../lib/supabase/server';
import crypto from 'crypto';

type LoginBody = { email?: string; password?: string };

function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as LoginBody;
  const email = (body.email ?? '').trim().toLowerCase();
  const password = body.password ?? '';

  if (!email || !password) {
    return NextResponse.json({ success: false, error: 'Email dan password wajib diisi.' }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { success: false, error: 'Server Supabase belum dikonfigurasi (SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY).' },
      { status: 500 },
    );
  }

  // Verify password using Postgres crypt() against stored bcrypt hash.
  const { data: cred, error: credErr } = await supabase
    .from('auth_email_password')
    .select('account_id, email, password_hash')
    .eq('email', email)
    .maybeSingle();

  if (credErr) {
    return NextResponse.json(
      {
        success: false,
        error: 'Login gagal (database error).',
        debug: process.env.NODE_ENV !== 'production' ? { step: 'select_cred', message: credErr.message } : undefined,
      },
      { status: 500 },
    );
  }
  if (!cred) {
    return NextResponse.json({ success: false, error: 'Email atau kata sandi salah.' }, { status: 401 });
  }

  const { data: verify, error: verifyErr } = await supabase.rpc('verify_password', {
    p_password: password,
    p_hash: cred.password_hash,
  });

  if (verifyErr) {
    return NextResponse.json(
      {
        success: false,
        error: 'Login gagal (verifikasi password error).',
        debug: process.env.NODE_ENV !== 'production' ? { step: 'verify_password', message: verifyErr.message } : undefined,
      },
      { status: 500 },
    );
  }
  if (verify !== true) {
    return NextResponse.json({ success: false, error: 'Email atau kata sandi salah.' }, { status: 401 });
  }

  // Check if account is already active in another session
  const { data: existingProfile } = await supabase
    .from('profiles')
    .select('id, username, avatar_id, batch_id, active_session_token, last_activity_at')
    .eq('id', cred.account_id)
    .maybeSingle();

  // Check if there's an active session (within last 5 minutes)
  if (existingProfile?.active_session_token && existingProfile?.last_activity_at) {
    const lastActivity = new Date(existingProfile.last_activity_at).getTime();
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;
    
    if (now - lastActivity < fiveMinutes) {
      // Account is currently active in another session
      return NextResponse.json(
        { 
          success: false, 
          error: 'Akun sedang digunakan di perangkat lain. Silakan coba akun yang lain atau tunggu beberapa saat.',
          code: 'ACCOUNT_IN_USE'
        }, 
        { status: 409 }
      );
    }
  }

  // Generate new session token
  const sessionToken = generateSessionToken();
  const now = new Date().toISOString();

  // Update profile with new session token
  const { error: updateErr } = await supabase
    .from('profiles')
    .update({
      active_session_token: sessionToken,
      session_started_at: now,
      last_activity_at: now,
    })
    .eq('id', cred.account_id);

  if (updateErr) {
    console.error('[login] Failed to update session token:', updateErr);
    // Don't fail login if session update fails, just log it
  }

  return NextResponse.json({
    success: true,
    user: {
      id: cred.account_id,
      email: cred.email,
      name: existingProfile?.username ?? 'Player',
      role: 'public',
      avatar: '/avatar-user.png',
      batchId: existingProfile?.batch_id ?? 'gen_1',
      avatarId: existingProfile?.avatar_id ?? 'chibi1',
      username: existingProfile?.username ?? 'Player',
      sessionToken,
    },
  });
}
