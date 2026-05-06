'use client';

import Link from 'next/link';
import type { JourneyProgress, StageId } from '../types/geuwat';
import { STAGE_BY_ID } from '../lib/stages';

type StageDetailPanelProps = {
  stageId: StageId;
  progress: JourneyProgress;
};

export default function StageDetailPanel({ stageId, progress }: StageDetailPanelProps) {
  const stage = STAGE_BY_ID[stageId];
  const stageProgress = progress.stages[stageId];
  const canEnter = stageProgress.unlocked;

  return (
    <div className="fixed max-md:static top-[200px] right-8 z-30 w-80 max-md:w-full bg-black/50 backdrop-blur-md border border-white/10 p-5 rounded-lg">
      <div className="flex justify-between items-start gap-3">
        <div>
          <h3 className="font-headline text-lg font-black uppercase tracking-tight text-white">PROGRESS</h3>
          <p className="text-[10px] font-bold font-headline tracking-widest text-white/80">
            {stageProgress.completed ? 'MODULE: COMPLETE' : canEnter ? 'MODULE: READY' : 'MODULE: LOCKED'}
          </p>
        </div>
        <div
          className="w-10 h-10 gt-hex flex items-center justify-center border"
          style={{ borderColor: `${stage.accentColor}55`, backgroundColor: `${stage.accentColor}22` }}
          aria-hidden="true"
        >
          <span className="font-headline font-black" style={{ color: stage.accentColor }}>
            {stage.initial}
          </span>
        </div>
      </div>

      <div className="space-y-3 mt-4">
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${stageProgress.bestPercentage}%`,
              backgroundColor: stage.accentColor,
              boxShadow: `0 0 10px ${stage.accentColor}`,
            }}
          />
        </div>

        <p className="text-[10px] text-white/60 italic leading-relaxed">
          {stageId === 'royal_king'
            ? 'DAHSYAT! Taklukkan boss stage untuk jadi ROYAL KING.'
            : 'Selamat! Naikkan akurasi sampai 100% untuk membuka stage berikutnya.'}
        </p>

        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-black/40 rounded border border-white/5 flex flex-col">
            <p className="text-[9px] text-white/35 font-headline uppercase mb-1 tracking-tighter">Best</p>
            <div className="flex items-center pt-1">
              <span
                className="font-headline text-2xl font-black transition-all duration-300"
                style={{ color: stage.accentColor, filter: `drop-shadow(0 0 10px ${stage.glow})` }}
              >
                {stageProgress.bestPercentage}%
              </span>
            </div>
            <p className="text-[9px] text-white/35 mt-1">Last: {stageProgress.lastPercentage}%</p>
          </div>
          <div className="p-2 bg-black/40 rounded border border-white/5">
            <p className="text-[9px] text-white/35 font-headline uppercase">Category</p>
            <p className="text-sm font-bold transition-all duration-300 mt-1" style={{ color: stage.accentColor }}>
              {stage.title.toUpperCase()}
            </p>
          </div>
        </div>

        <Link
          href={`/stage/${stageId}`}
          className={`w-full inline-flex items-center justify-center py-3 bg-neon-pink/90 text-black font-headline font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,124,245,0.4)] ${
            canEnter ? '' : 'pointer-events-none opacity-40'
          }`}
          aria-disabled={!canEnter}
        >
          {canEnter ? 'OPEN STAGE' : 'LOCKED'}
        </Link>
      </div>
    </div>
  );
}

