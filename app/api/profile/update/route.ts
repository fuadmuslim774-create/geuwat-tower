import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../../lib/supabase/server';
import type { AvatarId } from '../../../../types/geuwat';

type UpdateProfilePayload = {
  userId?: string;
  username?: string;
  avatarId?: AvatarId;
};

const VALID_AVATAR_IDS: AvatarId[] = ['chibi1', 'chibi2', 'chibi3', 'chibi4'];

function isValidAvatarId(value: unknown): value is AvatarId {
  return typeof value === 'string' && VALID_AVATAR_IDS.includes(value as AvatarId);
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = (await req.json().catch(() => ({}))) as UpdateProfilePayload;
    const { userId, username, avatarId } = body;

    // Validate required fields
    if (!userId || typeof userId !== 'string' || userId.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'userId is required and must be a non-empty string.' },
        { status: 400 },
      );
    }

    // At least one field must be provided
    if (!username && !avatarId) {
      return NextResponse.json(
        { success: false, error: 'At least one of username or avatarId must be provided.' },
        { status: 400 },
      );
    }

    // Validate username if provided
    if (username !== undefined) {
      if (typeof username !== 'string' || username.trim().length < 3 || username.trim().length > 20) {
        return NextResponse.json(
          { success: false, error: 'Username must be between 3 and 20 characters.' },
          { status: 400 },
        );
      }
    }

    // Validate avatarId if provided
    if (avatarId !== undefined && !isValidAvatarId(avatarId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid avatarId. Must be one of: chibi1, chibi2, chibi3, chibi4.' },
        { status: 400 },
      );
    }

    // Get Supabase service role client
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      console.error('[profile/update] Supabase client not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error: Supabase not available.' },
        { status: 500 },
      );
    }

    // Verify that the profile exists
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id, username, avatar_id, username_changed')
      .eq('id', userId)
      .maybeSingle();

    if (profileError) {
      console.error('[profile/update] Error fetching profile:', profileError);
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

    // Build update object
    const updateData: { username?: string; avatar_id?: AvatarId; username_changed?: boolean; updated_at?: string } = {
      updated_at: new Date().toISOString(),
    };

    if (username !== undefined) {
      // Check if username has already been changed
      if (profile.username_changed && profile.username !== username) {
        return NextResponse.json(
          { success: false, error: 'Username can only be changed once.' },
          { status: 400 },
        );
      }
      updateData.username = username.trim();
      updateData.username_changed = true;
    }

    if (avatarId !== undefined) {
      updateData.avatar_id = avatarId;
    }

    // Update profile
    const { error: updateError } = await supabase
      .from('profiles')
      .update(updateData)
      .eq('id', userId);

    if (updateError) {
      console.error('[profile/update] Error updating profile:', updateError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to update profile.',
          debug: process.env.NODE_ENV !== 'production' ? { message: updateError.message } : undefined,
        },
        { status: 500 },
      );
    }

    // Success
    return NextResponse.json({
      success: true,
      message: 'Profile updated successfully.',
    });
  } catch (error) {
    console.error('[profile/update] Unexpected error:', error);
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

