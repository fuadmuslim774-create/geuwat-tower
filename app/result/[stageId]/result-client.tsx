'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import AppShell from '../../../components/AppShell';
import { STAGE_BY_ID, getNextStageId } from '../../../lib/stages';
import { readStageResult } from '../../../lib/storage';
import type { StageId, StageResult } from '../../../types/geuwat';

function isStageId(value: string): value is StageId {
  return value in STAGE_BY_ID;
}

export default function ResultClient({ stageId }: { stageId: string }) {
  const router = useRouter();
  const resolvedStageId = useMemo(() => (isStageId(stageId) ? (stageId as StageId) : null), [stageId]);
  const [result, setResult] = useState<StageResult | null>(null);

  useEffect(() => {
    if (!resolvedStageId) return;
    const stored = readStageResult(resolvedStageId);
    if (!stored) {
      router.replace(`/stage/${resolvedStageId}`);
      return;
    }
    setResult(stored);
  }, [resolvedStageId, router]);

  if (!resolvedStageId) {
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

  const stage = STAGE_BY_ID[resolvedStageId];
  const nextStageId = getNextStageId(resolvedStageId);

  return (
    <AppShell>
      <main className="min-h-screen pt-14 md:pt-16 px-4 sm:px-6 md:px-12 pb-12 relative flex flex-col items-center">
        <div className="w-full max-w-3xl border border-white/10 bg-black/50 backdrop-blur-md rounded-lg p-5 sm:p-8">
          <p className="text-xs text-white/50 font-headline uppercase tracking-widest">
            Stage {stage.number.toString().padStart(2, '0')}
          </p>
          <h1 className="font-headline text-3xl md:text-4xl font-black uppercase tracking-[0.25em] mt-2" style={{ color: stage.accentColor }}>
            {stage.title}
          </h1>

          {result ? (
            <>
              <div className="mt-8 text-center">
                <p className="text-[10px] font-headline uppercase tracking-[0.4em] text-white/60">
                  {result.didComplete ? 'MISSION COMPLETE' : 'GAME OVER'}
                </p>
                <p
                  className="mt-3 font-headline text-5xl sm:text-6xl font-black"
                  style={{ color: result.didComplete ? '#39FF14' : '#FF3131', filter: 'drop-shadow(0 0 18px rgba(0,0,0,0.6))' }}
                >
                  {result.percentage}%
                </p>
                <p className="mt-3 text-white/70 text-sm">
                  Correct: <span className="font-bold">{result.correct}</span> / {result.total}
                </p>
                <p className="mt-2 text-white/60 text-xs">
                  Completion Time: <span className="font-bold">{Math.floor(result.durationSeconds / 60).toString().padStart(2, '0')}:{(result.durationSeconds % 60).toString().padStart(2, '0')}</span>
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
                <Link
                  href={`/play/${resolvedStageId}`}
                  className="px-5 py-3 bg-neon-pink/90 text-black font-headline font-black text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_15px_rgba(255,124,245,0.4)]"
                >
                  Retry
                </Link>
                {result.didComplete && nextStageId ? (
                  <Link
                    href={`/stage/${nextStageId}`}
                    className="px-5 py-3 bg-black/60 border border-white/10 text-neon-cyan font-headline font-black text-xs uppercase tracking-widest hover:border-neon-cyan/30"
                  >
                    Continue
                  </Link>
                ) : (
                  <Link
                    href="/"
                    className="px-5 py-3 bg-black/60 border border-white/10 text-neon-cyan font-headline font-black text-xs uppercase tracking-widest hover:border-neon-cyan/30"
                  >
                    Back to Journey
                  </Link>
                )}
              </div>
            </>
          ) : (
            <p className="mt-6 text-white/60">Loading result...</p>
          )}
        </div>
      </main>
    </AppShell>
  );
}
