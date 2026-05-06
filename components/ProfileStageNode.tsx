'use client';

import type { CSSProperties } from 'react';
import type { StageDefinition, StageProgress } from '../types/geuwat';

function alphaToHex(alpha: number): string {
  const clamped = Math.max(0, Math.min(1, alpha));
  return Math.round(clamped * 255)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase();
}

function hexWithAlpha(hex: string, alpha: number): string {
  // Expects #RRGGBB
  if (!hex.startsWith('#') || hex.length !== 7) return hex;
  return `${hex}${alphaToHex(alpha)}`;
}

function rgbaWithAlpha(rgba: string, alpha: number): string {
  const match = rgba.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9.]+)\s*\)/);
  if (!match) return rgba;
  const [, r, g, b] = match;
  return `rgba(${r},${g},${b},${Math.max(0, Math.min(1, alpha))})`;
}

type ProfileStageNodeProps = {
  stage: StageDefinition;
  progress: StageProgress;
  selected: boolean;
  onSelect: () => void;
  label: string;
};

export default function ProfileStageNode({ stage, progress, selected, onSelect, label }: ProfileStageNodeProps) {
  const isKing = stage.id === 'royal_king';
  const state: 'locked' | 'unlocked' | 'complete' = progress.completed ? 'complete' : progress.unlocked ? 'unlocked' : 'locked';

  const completeMul = state === 'complete' ? 1 : state === 'unlocked' ? 0.55 : 0;

  const baseBorderAlpha = isKing ? 0.5 : 0.3;
  const hoverBorderAlpha = isKing ? 0.8 : 0.6;
  const baseFillAlpha = isKing ? 0.1 : 0.05;
  const hoverFillAlpha = isKing ? 0.2 : 0.1;
  const innerFillAlpha = isKing ? 0.3 : 0.2;

  const borderBase = progress.unlocked ? hexWithAlpha(stage.accentColor, baseBorderAlpha * (state === 'complete' ? 1 : 0.55)) : 'rgba(255,255,255,0.12)';
  const borderHover = progress.unlocked
    ? hexWithAlpha(stage.accentColor, hoverBorderAlpha * (state === 'complete' ? 1 : 0.75))
    : 'rgba(255,255,255,0.18)';
  const fillBase = progress.unlocked ? hexWithAlpha(stage.accentColor, baseFillAlpha * (state === 'complete' ? 1 : 0.6)) : 'rgba(255,255,255,0.03)';
  const fillHover = progress.unlocked ? hexWithAlpha(stage.accentColor, hoverFillAlpha * (state === 'complete' ? 1 : 0.7)) : 'rgba(255,255,255,0.05)';
  const innerBg = progress.unlocked ? hexWithAlpha(stage.accentColor, innerFillAlpha * (state === 'complete' ? 1 : 0.65)) : 'rgba(255,255,255,0.04)';
  const innerBorder = progress.unlocked ? stage.accentColor : 'rgba(255,255,255,0.12)';

  const innerGlow = progress.completed ? stage.glow : progress.unlocked ? rgbaWithAlpha(stage.glow, 0.12) : 'rgba(255,255,255,0.06)';
  const textColor = progress.unlocked ? stage.accentColor : 'rgba(255,255,255,0.45)';
  const textGlow = progress.completed ? rgbaWithAlpha(stage.glow, isKing ? 1 : 0.8) : rgbaWithAlpha(stage.glow, 0.25);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`stage-node w-20 group cursor-pointer ${selected ? 'ring-2 ring-white/20' : ''}`}
      style={
        {
          ['--gt-border' as any]: borderBase,
          ['--gt-border-hover' as any]: borderHover,
          ['--gt-fill' as any]: fillBase,
          ['--gt-fill-hover' as any]: fillHover,
          opacity: state === 'locked' ? 0.55 : 1,
        } as CSSProperties
      }
      aria-label={label}
    >
      <div className="relative w-full aspect-square hex-clip-lg bg-black/40 border transition-all flex items-center justify-center border-[color:var(--gt-border)] group-hover:border-[color:var(--gt-border-hover)]">
        <div className="absolute inset-0 transition-colors bg-[color:var(--gt-fill)] group-hover:bg-[color:var(--gt-fill-hover)]"></div>
        <div
          className="relative w-10 h-10 hex-clip flex items-center justify-center group-hover:scale-110 transition-transform"
          style={{
            backgroundColor: innerBg,
            border: `2px solid ${innerBorder}`,
            boxShadow: progress.unlocked ? `0 0 ${isKing ? 30 : 20}px ${innerGlow}` : undefined,
          }}
        >
          {progress.unlocked ? (
            isKing ? (
              <span className="material-symbols-outlined text-2xl font-black" style={{ color: textColor, filter: `drop-shadow(0 0 12px ${textGlow})` }}>
                crown
              </span>
            ) : (
              <span className="font-headline text-lg font-black" style={{ color: textColor, filter: `drop-shadow(0 0 8px ${textGlow})` }}>
                {stage.initial}
              </span>
            )
          ) : (
            <span className="material-symbols-outlined text-white/50 text-2xl">lock</span>
          )}
        </div>
      </div>

      <p
        className={`mt-2 text-center font-headline text-[9px] font-black uppercase whitespace-nowrap px-1 py-0.5 rounded backdrop-blur-sm ${
          isKing
            ? 'tracking-[0.2em] bg-black/60 border border-neon-amber/20 shadow-[0_0_10px_rgba(255,191,0,0.2)]'
            : 'tracking-widest bg-black/40'
        }`}
        style={{ color: textColor, opacity: completeMul === 0 ? 0.75 : 1 }}
      >
        {label}
      </p>
    </button>
  );
}

