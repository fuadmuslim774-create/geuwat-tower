import type { AvatarId } from '../types/geuwat';

export const AVATAR_IDS: AvatarId[] = ['chibi1', 'chibi2', 'chibi3', 'chibi4'];

export function isAvatarId(value: string): value is AvatarId {
  return (AVATAR_IDS as string[]).includes(value);
}

export function getAvatarSrc(avatarId: AvatarId): string {
  return `/avatars/${avatarId}.png`;
}

