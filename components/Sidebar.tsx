'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { getAvatarSrc } from '../lib/avatars';
import { fetchIsCurrentPlayerGreatestKing } from '../lib/supabase/leaderboard';
import { getOrInitProfile } from '../lib/profile';
import { getOrInitProgress, getRankLabel, getRankStageId } from '../lib/progress';
import { STAGE_BY_ID } from '../lib/stages';
import { getStorageKeys } from '../lib/storage';
import { signOut } from '../lib/auth';
import type { AvatarId, StageId } from '../types/geuwat';

type SidebarItem = {
  href: string;
  label: string;
  icon: string;
};

const NAV_ITEMS: SidebarItem[] = [
  { href: '/', label: 'Journey', icon: 'grid_view' },
  { href: '/profile', label: 'Profile', icon: 'person' },
  { href: '/ranks', label: 'Global Ranks', icon: 'emoji_events' },
  { href: '/generation-ranks', label: 'Generation Ranks', icon: 'history' },
  { href: '/laporkan-kendala', label: 'Laporkan Kendala', icon: 'report' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [profileId, setProfileId] = useState('');
  const [username, setUsername] = useState('LEARNER_01');
  const [avatarId, setAvatarId] = useState<AvatarId>('chibi1');
  const [rank, setRank] = useState('Alphabet');
  const [rankStageId, setRankStageId] = useState<StageId>('alphabet');
  const [isGreatestKing, setIsGreatestKing] = useState(false);

  useEffect(() => {
    const profile = getOrInitProfile();
    const progress = getOrInitProgress();
    setProfileId(profile.profileId);
    setUsername(profile.username);
    setAvatarId(profile.avatarId);
    setRank(getRankLabel(progress));
    setRankStageId(getRankStageId(progress));
    fetchIsCurrentPlayerGreatestKing(profile.profileId).then(setIsGreatestKing).catch(() => setIsGreatestKing(false));

    const onStorage = () => {
      console.log('[Sidebar] Profile changed event received');
      const nextProfile = getOrInitProfile();
      const nextProgress = getOrInitProgress();
      console.log('[Sidebar] New avatar:', nextProfile.avatarId);
      setProfileId(nextProfile.profileId);
      setUsername(nextProfile.username);
      setAvatarId(nextProfile.avatarId);
      setRank(getRankLabel(nextProgress));
      setRankStageId(getRankStageId(nextProgress));
      fetchIsCurrentPlayerGreatestKing(nextProfile.profileId).then(setIsGreatestKing).catch(() => setIsGreatestKing(false));
    };

    window.addEventListener('storage', onStorage);
    window.addEventListener('gt_profile_changed', onStorage as EventListener);
    window.addEventListener('gt_progress_changed', onStorage as EventListener);

    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('gt_profile_changed', onStorage as EventListener);
      window.removeEventListener('gt_progress_changed', onStorage as EventListener);
    };
  }, []);

  const rankStage = STAGE_BY_ID[rankStageId];

  const content = useMemo(
    () => (
      <aside
        className={`fixed left-0 top-0 h-full z-50 flex flex-col pt-24 bg-zinc-950/95 backdrop-blur-md w-72 border-r border-neon-cyan/20 shadow-[20px_0_50px_-20px_rgba(0,240,255,0.1)] transition-transform duration-300 ${
          isOpen ? '' : '-translate-x-full'
        }`}
      >
        <button
          type="button"
          className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-neon-cyan transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-transparent gt-hex flex items-center justify-center border border-primary/50 overflow-hidden">
            <img
              alt="Player avatar"
              src={getAvatarSrc(avatarId)}
              className="w-full h-full object-cover scale-110"
              style={{ objectPosition: '50% 25%' }}
            />
          </div>
          <div>
            <p className="font-headline text-xs md:text-xs font-black text-neon-cyan tracking-wider drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
              {username}
            </p>
            <p
              className="font-label text-[10px] md:text-[10px] font-black uppercase tracking-wider mt-1 leading-none relative"
              style={{ color: rankStage.accentColor, filter: `drop-shadow(0 0 6px ${rankStage.glow})` }}
            >
              {isGreatestKing && rankStageId === 'royal_king' ? (
                <span className="gt-greatest-king inline-flex items-center justify-start overflow-visible">
                  <img
                    src="/ui/the-greatest-king-rb-converted.png"
                    alt="THE GREATEST KING"
                    className="h-[28px] sm:h-[30px] md:h-[32px] w-auto max-w-full select-none pointer-events-none drop-shadow-[0_0_22px_rgba(255,191,0,0.95)] scale-[1.9] translate-y-[7px]"
                    draggable={false}
                  />
                </span>
              ) : (
                rank
              )}
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-4 px-4 rounded flex items-center gap-4 font-headline text-sm font-bold uppercase transition-all duration-150 ease-in-out cursor-pointer ${
                  active
                    ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 shadow-[inset_0_0_10px_rgba(0,240,255,0.1)] hover:bg-neon-cyan/20'
                    : 'text-zinc-400 hover:bg-white/5 border border-transparent hover:border-white/10 hover:text-cyan-300'
                }`}
              >
                <span className={`material-symbols-outlined ${active ? 'drop-shadow-[0_0_8px_#00F0FF]' : ''}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6">
          <button
            type="button"
            onClick={async () => {
              if (typeof window !== 'undefined') {
                // Call signOut to clear session from database
                await signOut();
                
                const keys = getStorageKeys();
                // Clear all user-specific data from localStorage
                window.localStorage.removeItem(keys.profile);
                window.localStorage.removeItem(keys.sfxEnabled);
                window.localStorage.removeItem(keys.progress);
                
                // Clear auth session (already done by signOut, but ensure it's cleared)
                window.localStorage.removeItem('geuwat_user');
                
                // Clear session storage (temporary run state and flags)
                Object.keys(window.sessionStorage).forEach((key) => {
                  if (key.startsWith(keys.runPrefix) || key.startsWith(keys.resultPrefix)) {
                    window.sessionStorage.removeItem(key);
                  }
                });
                
                // Clear progress_restored flag to ensure new account restores from database
                window.sessionStorage.removeItem('progress_restored');
                
                window.dispatchEvent(new Event('gt_profile_changed'));
                window.dispatchEvent(new Event('gt_progress_changed'));
                // Redirect to login page
                window.location.href = '/login';
              }
              setIsOpen(false);
            }}
            className="w-full py-4 bg-neon-cyan text-black font-headline font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,240,255,0.35)] border border-neon-cyan/40 rounded"
          >
            LOGOUT
          </button>
        </div>
      </aside>
    ),
    [avatarId, isGreatestKing, isOpen, pathname, rank, rankStage.accentColor, rankStage.glow, rankStageId, username],
  );

  return (
    <>
      <button
        type="button"
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50 p-2 bg-surface-container/80 backdrop-blur-md border border-neon-cyan/50 text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.3)] hover:bg-neon-cyan/10 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <span className="material-symbols-outlined text-3xl">menu</span>
      </button>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      {content}
    </>
  );
}
