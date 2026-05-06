import type { AvatarId, ProfileState } from '../types/geuwat';
import { getCurrentUser, saveUserSession } from './auth';
import { readProfile, writeProfile } from './storage';

export const DEFAULT_USERNAME = 'LEARNER_01';
export const DEFAULT_AVATAR: AvatarId = 'chibi1';

const DEFAULT_PROFILE: ProfileState = {
  profileId: 'anon',
  batchId: null,
  username: DEFAULT_USERNAME,
  avatarId: DEFAULT_AVATAR,
  usernameChanged: false,
};

function createProfileId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `p_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}`;
}

export function getOrInitProfile(): ProfileState {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  const existing = readProfile();
  if (existing?.username) {
    const merged: ProfileState = { ...DEFAULT_PROFILE, ...existing };
    const needsWrite = !existing.avatarId || typeof existing.profileId !== 'string' || existing.profileId.length === 0;
    if (typeof merged.profileId !== 'string' || merged.profileId.length === 0) merged.profileId = createProfileId();

    const authed = getCurrentUser();
    if (authed?.id) {
      // Always sync profile data from authenticated user
      if (merged.profileId !== authed.id) {
        merged.profileId = authed.id;
      }
      if (authed.batchId && merged.batchId !== authed.batchId) {
        merged.batchId = authed.batchId;
      }
      // CRITICAL: Always update username and avatar from authenticated user
      // This ensures profile matches the logged-in account
      if (authed.username && merged.username !== authed.username) {
        merged.username = authed.username;
      }
      if (authed.avatarId && merged.avatarId !== authed.avatarId) {
        merged.avatarId = authed.avatarId as AvatarId;
      }
    }

    if (needsWrite || 
        merged.profileId !== existing.profileId || 
        merged.batchId !== (existing as any).batchId ||
        merged.username !== existing.username ||
        merged.avatarId !== existing.avatarId) {
      writeProfile(merged);
    }
    return merged;
  }
  const fresh: ProfileState = { ...DEFAULT_PROFILE, profileId: createProfileId() };
  const authed = getCurrentUser();
  if (authed?.id) {
    fresh.profileId = authed.id;
    fresh.batchId = typeof authed.batchId === 'string' ? authed.batchId : null;
    // Update username and avatar from authenticated user
    if (authed.username) fresh.username = authed.username;
    if (authed.avatarId) fresh.avatarId = authed.avatarId as AvatarId;
  }
  writeProfile(fresh);
  return fresh;
}

export function updateUsername(username: string) {
  const trimmed = username.trim();
  if (!trimmed) return;
  const prev = getOrInitProfile();
  
  // Check if username has already been changed
  if (prev.usernameChanged) {
    return false; // Cannot change username more than once
  }
  
  writeProfile({ ...prev, username: trimmed, usernameChanged: true });
  
  // Update user session in localStorage to prevent override
  const user = getCurrentUser();
  if (user) {
    user.username = trimmed;
    saveUserSession(user);
  }
  
  window.dispatchEvent(new Event('gt_profile_changed'));
  
  // Sync to database
  syncProfileToDatabase({ username: trimmed });
  
  return true;
}

export function updateAvatar(avatarId: AvatarId) {
  const prev = getOrInitProfile();
  writeProfile({ ...prev, avatarId });
  
  // Update user session in localStorage to prevent override
  const user = getCurrentUser();
  if (user) {
    user.avatarId = avatarId;
    saveUserSession(user);
  }
  
  window.dispatchEvent(new Event('gt_profile_changed'));
  
  // Sync to database
  syncProfileToDatabase({ avatarId });
}

/**
 * Sync profile changes to database
 * This ensures avatar and username persist across login sessions
 */
async function syncProfileToDatabase(updates: { username?: string; avatarId?: AvatarId }) {
  try {
    const user = getCurrentUser();
    if (!user) {
      console.warn('[syncProfileToDatabase] No user session found, skipping sync');
      return;
    }

    const payload: { userId: string; username?: string; avatarId?: AvatarId } = {
      userId: user.id,
    };

    if (updates.username) payload.username = updates.username;
    if (updates.avatarId) payload.avatarId = updates.avatarId;

    console.log('[syncProfileToDatabase] Syncing profile to database:', payload);

    const response = await fetch('/api/profile/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[syncProfileToDatabase] API call failed:', {
        status: response.status,
        error: errorData,
      });
      return;
    }

    const result = await response.json();
    console.log('[syncProfileToDatabase] Profile sync successful:', result);
  } catch (error) {
    console.error('[syncProfileToDatabase] Unexpected error during sync:', error);
  }
}
