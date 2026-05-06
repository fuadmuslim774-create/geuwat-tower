'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppShell from '../components/AppShell';
import JourneyMap from '../components/JourneyMap';
import { getOrInitProfile } from '../lib/profile';
import { canPlayStage, createInitialProgress, getOrInitProgress } from '../lib/progress';
import { STAGE_BY_ID } from '../lib/stages';
import type { JourneyProgress, StageId } from '../types/geuwat';

export default function JourneyPage() {
  const router = useRouter();
  const [progress, setProgress] = useState<JourneyProgress>(() => createInitialProgress());
  const [selectedStageId, setSelectedStageId] = useState<StageId>('alphabet');

  useEffect(() => {
    getOrInitProfile();
    const fresh = getOrInitProgress();
    setProgress(fresh);

    const onProgress = () => {
      setProgress(getOrInitProgress());
    };
    window.addEventListener('gt_progress_changed', onProgress as EventListener);
    window.addEventListener('storage', onProgress);
    return () => {
      window.removeEventListener('gt_progress_changed', onProgress as EventListener);
      window.removeEventListener('storage', onProgress);
    };
  }, []);

  const selectedStage = STAGE_BY_ID[selectedStageId];
  const selectedProgress = progress.stages[selectedStageId];
  const canStart = canPlayStage(selectedStageId, progress);

  const categoryName = useMemo(() => {
    const map: Record<StageId, string> = {
      alphabet: 'ALPHABET',
      lax_vowel: 'LAX_VOWEL',
      tense_vowel: 'TENSE_VOWEL',
      diphthong: 'DIPHTHONG',
      voiceless: 'VOICELESS CONSONANT',
      voiced: 'VOICED CONSONANT',
      final_s_es: 'FINAL -S/-ES',
      final_d_ed: 'FINAL -D/-ED',
      royal_king: 'ROYAL KING',
    };
    return map[selectedStageId];
  }, [selectedStageId]);

  const congratsText = useMemo(() => {
    if (!selectedProgress.unlocked) return 'Stage terkunci. Selesaikan stage sebelumnya.';

    if (selectedProgress.bestPercentage >= 100) {
      if (selectedStageId === 'royal_king') {
        return 'COMPLETE. DAHSYAT! Anda telah menaklukkan Geuwat Tower dan menjadi ROYAL KING.';
      }
      return 'COMPLETE. Selamat! Anda telah mencapai penguasaan penuh pada modul ini.';
    }

    if (selectedProgress.bestPercentage >= 1) {
      return 'IN PROGRESS. Selesaikan sampai 100% COMPLETE untuk menyalakan badge stage ini.';
    }

    return 'Siap mulai. Satu salah atau timeout langsung game over.';
  }, [selectedProgress.bestPercentage, selectedProgress.unlocked, selectedStageId]);

  return (
    <AppShell>
      <main className="ml-0 min-h-screen relative flex flex-col items-center overflow-auto md:overflow-hidden">
        <div className="relative z-30 pt-16 md:pt-12 flex flex-col items-center pointer-events-none w-full">
          <div className="flex items-center gap-4 md:gap-8 px-16 md:px-0">
            <div className="h-[2px] w-10 md:w-24 bg-gradient-to-r from-transparent via-neon-cyan/50 to-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
            <h1 className="font-headline text-[22px] sm:text-4xl md:text-6xl font-black text-neon-cyan uppercase tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.4em] drop-shadow-[0_0_20px_rgba(0,240,255,0.8)] leading-none whitespace-nowrap">
              GEUWAT TOWER
            </h1>
            <div className="h-[2px] w-10 md:w-24 bg-gradient-to-l from-transparent via-neon-cyan/50 to-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
          </div>
          <div className="mt-4 px-6 md:px-12 py-1 bg-neon-amber/5 border-x border-neon-amber/20">
            <p className="text-[10px] md:text-[11px] font-black font-headline tracking-[0.45em] md:tracking-[0.8em] uppercase text-neon-amber drop-shadow-[0_0_10px_rgba(255,191,0,0.7)] text-center">
              BE THE KING TO DOMINATE THE WORLD
            </p>
          </div>
        </div>

        <div
          className="relative z-30 mt-6 w-[min(92vw,420px)] md:fixed md:top-[200px] md:right-8 md:w-80 bg-surface-container/60 backdrop-blur-md border border-outline-variant p-5 rounded-lg"
          id="progress-panel"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-headline text-lg font-black text-on-surface uppercase tracking-tighter">PROGRESS</h3>
              <p className="text-[10px] font-bold font-headline tracking-widest text-white">
                {!selectedProgress.unlocked
                  ? 'SCAN: LOCKED'
                  : selectedProgress.bestPercentage >= 100
                    ? 'SCAN: COMPLETE'
                    : selectedProgress.bestPercentage >= 1
                      ? 'SCAN: IN PROGRESS'
                      : 'SCAN: READY'}
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div
                className="h-full transition-all duration-300"
                style={{
                  width: `${selectedProgress.bestPercentage}%`,
                  backgroundColor: selectedStage.accentColor,
                  boxShadow: `0 0 8px ${selectedStage.accentColor}`,
                }}
              />
            </div>
            <p className="text-[10px] text-zinc-400 font-body italic leading-relaxed">{congratsText}</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-black/40 rounded border border-white/5 flex flex-col">
                <p className="text-[9px] text-zinc-500 font-headline uppercase mb-1 tracking-tighter">Completion_Status</p>
                <div className="flex items-center pt-1">
                  <span
                    className="font-headline text-2xl font-black transition-all duration-300"
                    style={{
                      color: selectedStage.accentColor,
                      filter: `drop-shadow(0 0 10px ${selectedStage.glow})`,
                    }}
                  >
                    {selectedProgress.bestPercentage}%
                  </span>
                </div>
              </div>
              <div className="p-2 bg-black/40 rounded border border-white/5 relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px]"
                  style={{ backgroundColor: selectedStage.accentColor, boxShadow: `0 0 10px ${selectedStage.glow}` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute left-0 right-0 top-0 h-[2px]"
                  style={{ backgroundColor: selectedStage.accentColor, boxShadow: `0 0 10px ${selectedStage.glow}` }}
                  aria-hidden="true"
                />
                <div className="pl-3">
                  <p className="text-[9px] text-zinc-500 font-headline uppercase">CATEGORY</p>
                  <p className="text-sm font-bold transition-all duration-300" style={{ color: selectedStage.accentColor }}>
                    {categoryName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <JourneyMap
          progress={progress}
          selectedStageId={selectedStageId}
          onSelect={(id) => setSelectedStageId(id)}
        />

        <div className="fixed md:absolute bottom-4 md:bottom-8 left-1/2 md:left-auto md:right-8 -translate-x-1/2 md:translate-x-0 flex flex-col items-center md:items-end gap-6 z-20 w-[min(92vw,420px)] md:w-auto pb-[env(safe-area-inset-bottom)]">
          <button
            type="button"
            onClick={() => {
              if (!canStart) return;
              router.push(`/play/${selectedStageId}`);
            }}
            disabled={!canStart}
            className="relative group disabled:opacity-40 disabled:pointer-events-none w-full md:w-auto"
          >
            <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center justify-center gap-4 bg-gradient-to-r from-zinc-800 to-zinc-900 border-2 border-primary/50 px-10 md:px-12 py-4 md:py-5 rounded-lg shadow-2xl transition-all active:scale-95 group-hover:border-primary overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-headline text-3xl font-black text-on-surface tracking-[0.2em] italic">START</span>
              <span className="relative material-symbols-outlined text-primary animate-pulse text-3xl">play_arrow</span>
            </div>
          </button>
        </div>
      </main>
    </AppShell>
  );
}
