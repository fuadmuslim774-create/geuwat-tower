'use client';

import { useEffect, useRef, useState } from 'react';
import AppShell from '../../components/AppShell';
import ProfileStageNode from '../../components/ProfileStageNode';
import { AVATAR_IDS, getAvatarSrc } from '../../lib/avatars';
import { fetchIsCurrentPlayerGreatestKing } from '../../lib/supabase/leaderboard';
import { getOrInitProfile, updateAvatar, updateUsername } from '../../lib/profile';
import { createInitialProgress, getOrInitProgress, getRankLabel, getRankStageId } from '../../lib/progress';
import { STAGE_BY_ID } from '../../lib/stages';
import type { AvatarId, JourneyProgress, StageId } from '../../types/geuwat';

export default function ProfilePage() {
  const [progress, setProgress] = useState<JourneyProgress>(() => createInitialProgress());
  const [profileId, setProfileId] = useState('');
  const [username, setUsername] = useState('LEARNER_01');
  const [avatarId, setAvatarId] = useState<AvatarId>('chibi1');
  const [selectedBadge, setSelectedBadge] = useState<StageId | null>(null);
  const badgeScrollRef = useRef<HTMLDivElement | null>(null);
  const [isGreatestKing, setIsGreatestKing] = useState(false);
  const [usernameChanged, setUsernameChanged] = useState(false);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [selectedAvatarId, setSelectedAvatarId] = useState<AvatarId>('chibi1');
  const [isChangingAvatar, setIsChangingAvatar] = useState(false);

  useEffect(() => {
    const profile = getOrInitProfile();
    const p = getOrInitProgress();
    setProfileId(profile.profileId);
    setUsername(profile.username);
    setAvatarId(profile.avatarId);
    setSelectedAvatarId(profile.avatarId);
    setUsernameChanged(profile.usernameChanged);
    setProgress(p);
    fetchIsCurrentPlayerGreatestKing(profile.profileId).then(setIsGreatestKing).catch(() => setIsGreatestKing(false));

    const onChange = () => {
      const nextProfile = getOrInitProfile();
      const nextProgress = getOrInitProgress();
      setProfileId(nextProfile.profileId);
      setUsername(nextProfile.username);
      setAvatarId(nextProfile.avatarId);
      setSelectedAvatarId(nextProfile.avatarId);
      setUsernameChanged(nextProfile.usernameChanged);
      setProgress(nextProgress);
      fetchIsCurrentPlayerGreatestKing(nextProfile.profileId).then(setIsGreatestKing).catch(() => setIsGreatestKing(false));
    };

    window.addEventListener('storage', onChange);
    window.addEventListener('gt_profile_changed', onChange as EventListener);
    window.addEventListener('gt_progress_changed', onChange as EventListener);
    return () => {
      window.removeEventListener('storage', onChange);
      window.removeEventListener('gt_profile_changed', onChange as EventListener);
      window.removeEventListener('gt_progress_changed', onChange as EventListener);
    };
  }, []);

  const rank = getRankLabel(progress);
  const rankStage = STAGE_BY_ID[getRankStageId(progress)];
  const s = progress.stages;

  const handleUsernameChange = () => {
    const trimmed = newUsername.trim();
    if (!trimmed) {
      setUsernameError('Username cannot be empty');
      return;
    }
    if (trimmed.length < 3) {
      setUsernameError('Username must be at least 3 characters');
      return;
    }
    if (trimmed.length > 20) {
      setUsernameError('Username must be at most 20 characters');
      return;
    }
    
    const success = updateUsername(trimmed);
    if (success) {
      setUsername(trimmed);
      setUsernameChanged(true);
      setIsEditingUsername(false);
      setNewUsername('');
      setUsernameError('');
    } else {
      setUsernameError('Username can only be changed once');
    }
  };

  const handleCancelEdit = () => {
    setIsEditingUsername(false);
    setNewUsername('');
    setUsernameError('');
  };

  const handleAvatarChange = () => {
    updateAvatar(selectedAvatarId);
    setAvatarId(selectedAvatarId);
    setIsChangingAvatar(false);
  };

  const handleCancelAvatarChange = () => {
    setSelectedAvatarId(avatarId);
    setIsChangingAvatar(false);
  };

  useEffect(() => {
    const el = badgeScrollRef.current;
    if (!el) return;

    const center = () => {
      const target = selectedBadge ? document.getElementById(`badge-${selectedBadge}`) : null;
      if (target && typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        return;
      }
      // Default: center the pyramid board itself on first open.
      el.scrollLeft = Math.max(0, Math.round((el.scrollWidth - el.clientWidth) / 2));
    };

    const raf1 = window.requestAnimationFrame(() => {
      const raf2 = window.requestAnimationFrame(center);
      window.setTimeout(center, 80);
      return () => window.cancelAnimationFrame(raf2);
    });

    const onResize = () => center();
    window.addEventListener('resize', onResize);
    return () => {
      window.cancelAnimationFrame(raf1);
      window.removeEventListener('resize', onResize);
    };
  }, [selectedBadge]);

  return (
    <AppShell>
      <main className="ml-0 min-h-screen relative flex flex-col items-center overflow-auto custom-scrollbar">
        <div className="relative z-30 pt-16 md:pt-12 flex flex-col items-center pointer-events-none w-full shrink-0">
          <div className="flex items-center gap-4 md:gap-8 px-16 md:px-0">
            <div className="h-[2px] w-10 md:w-24 bg-gradient-to-r from-transparent via-neon-cyan/50 to-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
            <h1 className="font-headline text-[22px] sm:text-4xl md:text-6xl font-black text-neon-cyan uppercase tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.4em] drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] leading-none whitespace-nowrap">
              GEUWAT TOWER
            </h1>
            <div className="h-[2px] w-10 md:w-24 bg-gradient-to-l from-transparent via-neon-cyan/50 to-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
          </div>
          <div className="mt-4 px-6 md:px-12 py-1 bg-neon-amber/5 border-x border-neon-amber/20">
            <p className="text-[10px] md:text-[11px] font-black font-headline tracking-[0.45em] md:tracking-[0.8em] uppercase text-neon-amber drop-shadow-[0_0_10px_rgba(255,191,0,0.8)] text-center">
              BE THE KING TO DOMINATE THE WORLD
            </p>
          </div>
        </div>

        <div
          className="relative z-30 mt-6 w-[min(92vw,420px)] bg-surface-container/60 backdrop-blur-md border border-outline-variant rounded-lg flex flex-col items-center py-6 shrink-0"
          id="profile-panel"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-neon-amber/20 blur-xl opacity-50"></div>
              <div className="w-20 h-20 bg-zinc-900 hex-clip-lg border-2 border-neon-amber/50 flex items-center justify-center overflow-hidden">
                <img
                  alt="Selected avatar"
                  src={getAvatarSrc(isChangingAvatar ? selectedAvatarId : avatarId)}
                  className="w-full h-full object-cover scale-110"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-neon-amber/80"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-neon-amber/80"></div>
            </div>

            <div className="text-center space-y-1 mt-1">
              {isEditingUsername ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter new username"
                    className="w-full max-w-[200px] px-3 py-2 bg-black/40 border border-neon-cyan/50 rounded text-white text-sm focus:outline-none focus:border-neon-cyan"
                    maxLength={20}
                  />
                  {usernameError && (
                    <p className="text-red-400 text-xs">{usernameError}</p>
                  )}
                  <p className="text-[9px] text-white/40 tracking-wide">
                    Username can only be changed once
                  </p>
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={handleUsernameChange}
                      className="px-3 py-1 bg-neon-cyan/20 border border-neon-cyan/50 rounded text-neon-cyan text-xs hover:bg-neon-cyan/30 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded text-white text-xs hover:bg-white/20 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <h3 className="font-headline text-lg font-black text-on-surface uppercase tracking-widest" id="profile-name">
                    {username}
                  </h3>
                  {!usernameChanged && (
                    <button
                      onClick={() => setIsEditingUsername(true)}
                      className="text-neon-cyan/60 hover:text-neon-cyan transition-colors"
                      title="Change username (can only be changed once)"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  )}
                </div>
              )}
              <p
                className="font-label text-[10px] font-bold tracking-widest uppercase leading-none relative"
                style={{ color: rankStage.accentColor, filter: `drop-shadow(0 0 5px ${rankStage.glow})` }}
              >
                {isGreatestKing && getRankStageId(progress) === 'royal_king' ? (
                  <span className="gt-greatest-king inline-flex items-center justify-center overflow-visible">
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

          <div className="mt-4 flex flex-col items-center gap-3">
            {isChangingAvatar ? (
              <>
                <div className="flex items-center justify-center gap-2">
                  {AVATAR_IDS.map((id) => {
                    const selected = id === selectedAvatarId;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setSelectedAvatarId(id)}
                        className={`w-12 h-12 hex-clip-lg border transition-colors overflow-hidden bg-black/40 ${
                          selected ? 'border-neon-cyan/70 shadow-[0_0_12px_rgba(0,240,255,0.3)]' : 'border-white/10 hover:border-neon-cyan/40'
                        } cursor-pointer`}
                        aria-label={`Select ${id}`}
                      >
                        <img alt="" src={getAvatarSrc(id)} className="w-full h-full object-cover scale-110" style={{ objectPosition: '50% 20%' }} />
                      </button>
                    );
                  })}
                </div>
                
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={handleAvatarChange}
                    className="px-4 py-1.5 bg-neon-cyan/20 border border-neon-cyan/50 rounded text-neon-cyan text-xs font-bold hover:bg-neon-cyan/30 transition-colors"
                  >
                    Ganti
                  </button>
                  <button
                    onClick={handleCancelAvatarChange}
                    className="px-4 py-1.5 bg-white/10 border border-white/20 rounded text-white text-xs font-bold hover:bg-white/20 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => setIsChangingAvatar(true)}
                className="px-4 py-1.5 bg-neon-amber/20 border border-neon-amber/50 rounded text-neon-amber text-xs font-bold hover:bg-neon-amber/30 transition-colors"
              >
                Ubah Avatar
              </button>
            )}
          </div>
        </div>

        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center py-4 gap-6 shrink-0">
          <div ref={badgeScrollRef} className="w-full overflow-x-auto custom-scrollbar px-4 scroll-smooth">
            <div className="min-w-[780px] mx-auto flex flex-col items-center justify-center py-4 gap-6">
              <div id="badge-royal_king" className="flex justify-center w-full">
                <ProfileStageNode
                  stage={STAGE_BY_ID.royal_king}
                  progress={s.royal_king}
                  selected={selectedBadge === 'royal_king'}
                  onSelect={() => setSelectedBadge('royal_king')}
                  label="09_ROYAL_KING"
                />
              </div>

              <div className="flex justify-center w-full gap-6">
                <div id="badge-final_s_es">
                <ProfileStageNode
                  stage={STAGE_BY_ID.final_s_es}
                  progress={s.final_s_es}
                  selected={selectedBadge === 'final_s_es'}
                  onSelect={() => setSelectedBadge('final_s_es')}
                  label="07_FINAL_S"
                />
                </div>
                <div id="badge-final_d_ed">
                <ProfileStageNode
                  stage={STAGE_BY_ID.final_d_ed}
                  progress={s.final_d_ed}
                  selected={selectedBadge === 'final_d_ed'}
                  onSelect={() => setSelectedBadge('final_d_ed')}
                  label="08_FINAL_D"
                />
                </div>
              </div>

              <div className="flex justify-center w-full gap-16">
                <div id="badge-voiceless">
                <ProfileStageNode
                  stage={STAGE_BY_ID.voiceless}
                  progress={s.voiceless}
                  selected={selectedBadge === 'voiceless'}
                  onSelect={() => setSelectedBadge('voiceless')}
                  label="05_VOICELESS"
                />
                </div>
                <div id="badge-voiced">
                <ProfileStageNode
                  stage={STAGE_BY_ID.voiced}
                  progress={s.voiced}
                  selected={selectedBadge === 'voiced'}
                  onSelect={() => setSelectedBadge('voiced')}
                  label="06_VOICED"
                />
                </div>
              </div>

              <div className="flex justify-center w-full gap-4">
                <div id="badge-alphabet">
                <ProfileStageNode
                  stage={STAGE_BY_ID.alphabet}
                  progress={s.alphabet}
                  selected={selectedBadge === 'alphabet'}
                  onSelect={() => setSelectedBadge('alphabet')}
                  label="01_ALPHABET"
                />
                </div>
                <div id="badge-lax_vowel">
                <ProfileStageNode
                  stage={STAGE_BY_ID.lax_vowel}
                  progress={s.lax_vowel}
                  selected={selectedBadge === 'lax_vowel'}
                  onSelect={() => setSelectedBadge('lax_vowel')}
                  label="02_LAX_VOWEL"
                />
                </div>
                <div id="badge-tense_vowel">
                <ProfileStageNode
                  stage={STAGE_BY_ID.tense_vowel}
                  progress={s.tense_vowel}
                  selected={selectedBadge === 'tense_vowel'}
                  onSelect={() => setSelectedBadge('tense_vowel')}
                  label="03_TENSE_VOWEL"
                />
                </div>
                <div id="badge-diphthong">
                <ProfileStageNode
                  stage={STAGE_BY_ID.diphthong}
                  progress={s.diphthong}
                  selected={selectedBadge === 'diphthong'}
                  onSelect={() => setSelectedBadge('diphthong')}
                  label="04_DIPHTHONG"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
