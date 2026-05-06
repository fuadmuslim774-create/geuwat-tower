export function parseTimeToSeconds(time: string): number {
  const parts = time.split(':').map((p) => Number.parseInt(p, 10));
  if (parts.length !== 3) return Number.POSITIVE_INFINITY;
  const [hh, mm, ss] = parts;
  if ([hh, mm, ss].some((n) => Number.isNaN(n))) return Number.POSITIVE_INFINITY;
  return hh * 3600 + mm * 60 + ss;
}

export function formatHMS(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const hh = Math.floor(clamped / 3600);
  const mm = Math.floor((clamped % 3600) / 60);
  const ss = clamped % 60;
  return `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
}

