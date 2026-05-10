'use client';

import type { StageId } from '@/types/geuwat';
import { STAGE_BY_ID } from '@/lib/stages';

interface StageSelectorProps {
  selectedStage: StageId | null;
  onStageChange: (stageId: StageId | null) => void;
  className?: string;
}

export default function StageSelector({ selectedStage, onStageChange, className = '' }: StageSelectorProps) {
  const renderStageButton = (stageId: StageId | null, label: string) => {
    const isSelected = selectedStage === stageId;
    const stage = stageId ? STAGE_BY_ID[stageId] : null;
    const accentColor = stage?.accentColor ?? '#FF8C00'; // Orange for Overall
    const glow = stage?.glow ?? 'rgba(255,140,0,0.4)';
    
    return (
      <button
        type="button"
        onClick={() => onStageChange(stageId)}
        aria-pressed={isSelected}
        className={`
          font-headline tracking-wide
          rounded-lg
          px-4 py-3 md:px-6 md:py-4
          text-sm md:text-base
          font-bold
          transition-all duration-200
          backdrop-blur-md
          border-2
          min-h-[60px] min-w-[120px]
          flex items-center justify-center
          ${
            isSelected
              ? 'shadow-[0_0_25px_rgba(255,140,0,0.5)]'
              : 'hover:shadow-[0_0_20px_rgba(255,140,0,0.3)]'
          }
        `}
        style={{
          backgroundColor: isSelected ? `${accentColor}20` : `${accentColor}10`,
          borderColor: isSelected ? `${accentColor}` : `${accentColor}60`,
          color: isSelected ? accentColor : `${accentColor}CC`,
          filter: isSelected ? `drop-shadow(0 0 8px ${glow})` : undefined,
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label="Stage selection"
      className={`w-full overflow-x-auto custom-scrollbar px-4 scroll-smooth ${className}`}
    >
      <div className="min-w-[780px] mx-auto flex flex-col items-center justify-center py-4 gap-6">
        {/* Row 1: Royal King */}
        <div className="flex justify-center w-full">
          {renderStageButton('royal_king', STAGE_BY_ID.royal_king.title)}
        </div>

        {/* Row 2: Final S/ES and Final D/ED */}
        <div className="flex justify-center w-full gap-6">
          {renderStageButton('final_s_es', STAGE_BY_ID.final_s_es.title)}
          {renderStageButton('final_d_ed', STAGE_BY_ID.final_d_ed.title)}
        </div>

        {/* Row 3: Voiceless, Overall (Orange), Voiced */}
        <div className="flex justify-center w-full gap-16">
          {renderStageButton('voiceless', STAGE_BY_ID.voiceless.title)}
          {renderStageButton(null, 'OVERALL')}
          {renderStageButton('voiced', STAGE_BY_ID.voiced.title)}
        </div>

        {/* Row 4: Alphabet, Lax Vowel, Tense Vowel, Diphthong */}
        <div className="flex justify-center w-full gap-4">
          {renderStageButton('alphabet', STAGE_BY_ID.alphabet.title)}
          {renderStageButton('lax_vowel', STAGE_BY_ID.lax_vowel.title)}
          {renderStageButton('tense_vowel', STAGE_BY_ID.tense_vowel.title)}
          {renderStageButton('diphthong', STAGE_BY_ID.diphthong.title)}
        </div>
      </div>
    </div>
  );
}
