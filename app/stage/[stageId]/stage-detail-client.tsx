'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import AppShell from '../../../components/AppShell';
import { STAGE_BY_ID } from '../../../lib/stages';
import { createInitialProgress, getOrInitProgress } from '../../../lib/progress';
import type { JourneyProgress, StageId } from '../../../types/geuwat';

function isStageId(value: string): value is StageId {
  return value in STAGE_BY_ID;
}

export default function StageDetailClient({ stageId }: { stageId: string }) {
  const [progress, setProgress] = useState<JourneyProgress>(() => createInitialProgress());

  const resolvedStageId = useMemo(() => (isStageId(stageId) ? stageId : null), [stageId]);
  const stage = resolvedStageId ? STAGE_BY_ID[resolvedStageId] : null;

  useEffect(() => {
    const p = getOrInitProgress();
    setProgress(p);
    const onChange = () => setProgress(getOrInitProgress());
    window.addEventListener('storage', onChange);
    window.addEventListener('gt_progress_changed', onChange as EventListener);
    return () => {
      window.removeEventListener('storage', onChange);
      window.removeEventListener('gt_progress_changed', onChange as EventListener);
    };
  }, []);

  if (!resolvedStageId || !stage) {
    return (
      <AppShell>
        <main className="min-h-screen flex items-center justify-center p-4 sm:p-10">
          <div className="max-w-lg text-center bg-black/50 border border-white/10 rounded-lg p-6">
            <h1 className="font-headline text-2xl font-black text-neon-cyan tracking-widest uppercase">Unknown Stage</h1>
            <p className="text-white/60 mt-3">Stage tidak ditemukan.</p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center px-4 py-3 bg-neon-pink/90 text-black font-headline font-black text-xs uppercase tracking-widest"
            >
              Back to Journey
            </Link>
          </div>
        </main>
      </AppShell>
    );
  }

  const sp = progress.stages[resolvedStageId];
  const canStart = sp.unlocked;

  return (
    <AppShell>
      <main className="min-h-screen pt-14 md:pt-16 px-4 sm:px-6 md:px-12 pb-12 relative flex flex-col items-center">
        <div className="w-full max-w-4xl border border-white/10 bg-black/50 backdrop-blur-md rounded-lg p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs text-white/50 font-headline uppercase tracking-widest">
                Stage {stage.number.toString().padStart(2, '0')}
              </p>
              <h1
                className="font-headline text-3xl md:text-4xl font-black uppercase tracking-[0.25em] mt-2"
                style={{ color: stage.accentColor }}
              >
                {stage.title}
              </h1>
              <p className="text-white/70 mt-4 text-sm leading-relaxed">{stage.description}</p>

              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-black/40 border border-white/5 rounded">
                  <p className="text-[10px] text-white/35 font-headline uppercase tracking-widest">Unlocked</p>
                  <p className="text-sm font-bold mt-1">{sp.unlocked ? 'YES' : 'NO'}</p>
                </div>
                <div className="p-3 bg-black/40 border border-white/5 rounded">
                  <p className="text-[10px] text-white/35 font-headline uppercase tracking-widest">Best</p>
                  <p className="text-sm font-bold mt-1">{sp.bestPercentage}%</p>
                </div>
                <div className="p-3 bg-black/40 border border-white/5 rounded">
                  <p className="text-[10px] text-white/35 font-headline uppercase tracking-widest">Last</p>
                  <p className="text-sm font-bold mt-1">{sp.lastPercentage}%</p>
                </div>
              </div>
            </div>

            <div
              className="w-24 h-24 sm:w-32 sm:h-32 gt-hex-lg flex items-center justify-center border shadow-[0_0_30px_rgba(255,255,255,0.06)]"
              style={{ borderColor: `${stage.accentColor}55`, backgroundColor: `${stage.accentColor}12` }}
              aria-hidden="true"
            >
              <span className="font-headline text-4xl sm:text-5xl font-black" style={{ color: stage.accentColor }}>
                {stage.initial}
              </span>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3 flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-3 bg-black/60 border border-white/10 text-white/80 font-headline font-black text-xs uppercase tracking-widest hover:border-white/20"
            >
              Back
            </Link>
            <Link
              href={`/play/${resolvedStageId}`}
              className={`inline-flex items-center justify-center px-5 py-3 bg-neon-pink/90 text-black font-headline font-black text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_15px_rgba(255,124,245,0.4)] ${
                canStart ? '' : 'pointer-events-none opacity-40'
              }`}
              aria-disabled={!canStart}
            >
              {canStart ? 'START' : 'LOCKED'}
            </Link>
          </div>

          <p className="mt-4 text-[11px] text-white/50">
            One-hit fail: satu salah atau timeout langsung game over.
          </p>
        </div>
      </main>
    </AppShell>
  );
}
