'use client';

import type { CSSProperties } from 'react';
import type { StageDefinition, StageProgress } from '../types/geuwat';

function rgbaWithAlpha(rgba: string, alpha: number): string {
  const match = rgba.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9.]+)\s*\)/);
  if (!match) return rgba;
  const [, r, g, b] = match;
  return `rgba(${r},${g},${b},${alpha})`;
}

type StageNodeProps = {
  stage: StageDefinition;
  progress: StageProgress;
  selected: boolean;
  onSelect: () => void;
  style?: CSSProperties;
  label: string;
};

export default function StageNode({ stage, progress, selected, onSelect, style, label }: StageNodeProps) {
  const labelColor = progress.unlocked ? stage.accentColor : 'rgba(255,255,255,0.35)';
  const glow = progress.unlocked ? stage.glow : 'rgba(255,255,255,0.06)';
  const isKing = stage.id === 'royal_king';

  const borderIdle = progress.unlocked ? `${stage.accentColor}4D` : 'rgba(255,255,255,0.12)';
  const borderHover = progress.unlocked ? `${stage.accentColor}99` : 'rgba(255,255,255,0.18)';
  const fillIdle = progress.unlocked ? `${stage.accentColor}0D` : 'rgba(255,255,255,0.03)';
  const fillHover = progress.unlocked ? `${stage.accentColor}1A` : 'rgba(255,255,255,0.05)';
  const textGlow = progress.unlocked ? rgbaWithAlpha(stage.glow, isKing ? 1 : 0.8) : 'rgba(255,255,255,0.12)';

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`stage-node group cursor-pointer w-32 absolute ${selected ? 'ring-2 ring-white/20' : ''}`}
      style={
        {
          ...(style ?? {}),
          ['--gt-stage-border' as any]: borderIdle,
          ['--gt-stage-border-hover' as any]: borderHover,
          ['--gt-stage-fill' as any]: fillIdle,
          ['--gt-stage-fill-hover' as any]: fillHover,
        } as CSSProperties
      }
      aria-label={`Stage ${stage.number}: ${stage.title}`}
    >
      <div
        className="relative w-full aspect-square hex-clip-lg bg-black/40 border transition-all flex items-center justify-center border-[color:var(--gt-stage-border)] group-hover:border-[color:var(--gt-stage-border-hover)]"
        style={{
          boxShadow: selected ? `0 0 18px ${glow}` : undefined,
        }}
      >
        <div
          className="absolute inset-0 transition-colors bg-[color:var(--gt-stage-fill)] group-hover:bg-[color:var(--gt-stage-fill-hover)]"
        />
        <div
          className="relative w-14 h-14 hex-clip flex items-center justify-center transition-transform group-hover:scale-110"
          style={{
            backgroundColor: progress.unlocked ? `${stage.accentColor}${isKing ? '4D' : '33'}` : 'rgba(255,255,255,0.04)',
            border: `2px solid ${progress.unlocked ? stage.accentColor : 'rgba(255,255,255,0.12)'}`,
            boxShadow: isKing ? `0 0 30px ${glow}` : `0 0 20px ${glow}`,
          }}
        >
          {progress.unlocked ? (
            isKing ? (
              <span
                className="material-symbols-outlined text-4xl font-black"
                style={{ color: labelColor, filter: `drop-shadow(0 0 12px ${textGlow})` }}
              >
                crown
              </span>
            ) : (
              <span
                className="font-headline text-2xl font-black"
                style={{ color: labelColor, filter: `drop-shadow(0 0 8px ${textGlow})` }}
              >
                {stage.initial}
              </span>
            )
          ) : (
            <span className="material-symbols-outlined text-white/40 text-3xl">lock</span>
          )}
        </div>

        {progress.completed ? (
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center shadow-[0_0_14px_rgba(0,240,255,0.35)]">
            <span className="material-symbols-outlined text-neon-cyan text-base">check</span>
          </span>
        ) : null}
      </div>
      <p
        className={`mt-3 text-center font-headline font-black px-2 py-0.5 rounded backdrop-blur-sm uppercase whitespace-nowrap ${
          isKing
            ? 'text-[11px] tracking-[0.2em] bg-black/60 border border-neon-amber/20 shadow-[0_0_10px_rgba(255,191,0,0.2)]'
            : 'text-[10px] tracking-widest bg-black/40'
        }`}
        style={{ color: labelColor }}
      >
        {label}
      </p>
    </button>
  );
}
