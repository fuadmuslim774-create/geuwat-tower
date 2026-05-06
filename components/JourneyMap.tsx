'use client';

import type { JourneyProgress, StageId } from '../types/geuwat';
import { STAGE_BY_ID } from '../lib/stages';
import StageNode from './StageNode';

type JourneyMapProps = {
  progress: JourneyProgress;
  selectedStageId: StageId;
  onSelect: (stageId: StageId) => void;
};

export default function JourneyMap({ progress, selectedStageId, onSelect }: JourneyMapProps) {
  const s = progress.stages;

  return (
    <div className="relative z-10 w-full flex-1 overflow-auto custom-scrollbar flex items-end pb-36 md:pb-24">
      <div className="min-w-max mr-auto h-[320px] sm:h-[360px] md:h-[400px] relative pl-6 md:pl-12 pr-24 md:pr-48">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMinYMin meet"
          viewBox="0 0 1800 400"
        >
          <path className="winding-path opacity-40" d="M 92 254 L 164 254 L 164 54 L 236 54" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />
          <path className="winding-path opacity-40" d="M 292 54 L 364 54 L 364 254 L 436 254" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />
          <path className="winding-path opacity-40" d="M 492 254 L 564 254 L 564 54 L 636 54" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />
          <path className="winding-path opacity-40" d="M 692 54 L 764 54 L 764 254 L 836 254" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />
          <path className="winding-path opacity-40" d="M 892 254 L 964 254 L 964 54 L 1036 54" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />
          <path className="winding-path opacity-40" d="M 1092 54 L 1164 54 L 1164 254 L 1236 254" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />
          <path className="winding-path opacity-40" d="M 1292 254 L 1364 254 L 1364 54 L 1436 54" fill="none" stroke="url(#pathGradient)" strokeWidth="2" />
          <path
            className="winding-path opacity-60"
            d="M 1492 54 L 1564 54 L 1564 254 L 1636 254"
            fill="none"
            stroke="#FFBF00"
            strokeWidth="2"
            style={{ filter: 'drop-shadow(0 0 3px #FFBF00)' }}
          />
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        <StageNode
          stage={STAGE_BY_ID.alphabet}
          progress={s.alphabet}
          selected={selectedStageId === 'alphabet'}
          onSelect={() => onSelect('alphabet')}
          label="01_ALPHABET"
          style={{ top: 190, left: 0 }}
        />
        <StageNode
          stage={STAGE_BY_ID.lax_vowel}
          progress={s.lax_vowel}
          selected={selectedStageId === 'lax_vowel'}
          onSelect={() => onSelect('lax_vowel')}
          label="02_LAX_VOWEL"
          style={{ top: 0, left: 200 }}
        />
        <StageNode
          stage={STAGE_BY_ID.tense_vowel}
          progress={s.tense_vowel}
          selected={selectedStageId === 'tense_vowel'}
          onSelect={() => onSelect('tense_vowel')}
          label="03_TENSE_VOWEL"
          style={{ top: 190, left: 400 }}
        />
        <StageNode
          stage={STAGE_BY_ID.diphthong}
          progress={s.diphthong}
          selected={selectedStageId === 'diphthong'}
          onSelect={() => onSelect('diphthong')}
          label="04_DIPHTHONG"
          style={{ top: 0, left: 600 }}
        />
        <StageNode
          stage={STAGE_BY_ID.voiceless}
          progress={s.voiceless}
          selected={selectedStageId === 'voiceless'}
          onSelect={() => onSelect('voiceless')}
          label="05_VOICELESS"
          style={{ top: 190, left: 800 }}
        />
        <StageNode
          stage={STAGE_BY_ID.voiced}
          progress={s.voiced}
          selected={selectedStageId === 'voiced'}
          onSelect={() => onSelect('voiced')}
          label="06_VOICED"
          style={{ top: 0, left: 1000 }}
        />
        <StageNode
          stage={STAGE_BY_ID.final_s_es}
          progress={s.final_s_es}
          selected={selectedStageId === 'final_s_es'}
          onSelect={() => onSelect('final_s_es')}
          label="07_FINAL_S/-ES"
          style={{ top: 190, left: 1200 }}
        />
        <StageNode
          stage={STAGE_BY_ID.final_d_ed}
          progress={s.final_d_ed}
          selected={selectedStageId === 'final_d_ed'}
          onSelect={() => onSelect('final_d_ed')}
          label="08_FINAL_D/-ED"
          style={{ top: 0, left: 1400 }}
        />
        <StageNode
          stage={STAGE_BY_ID.royal_king}
          progress={s.royal_king}
          selected={selectedStageId === 'royal_king'}
          onSelect={() => onSelect('royal_king')}
          label="09_ROYAL_KING"
          style={{ top: 190, left: 1600 }}
        />
      </div>
    </div>
  );
}
