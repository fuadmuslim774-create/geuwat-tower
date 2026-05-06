import type { JourneyProgress, LeaderboardEntry, ProfileState, RunState, StageId, StageResult } from '../types/geuwat';

const STORAGE_KEYS = {
  profile: 'gt_profile_v1',
  progress: 'gt_progress_v1',
  leaderboard: 'gt_leaderboard_v1',
  runPrefix: 'gt_run_v1:',
  resultPrefix: 'gt_result_v1:',
  sfxEnabled: 'gt_sfx_enabled_v1',
} as const;

function safeJsonParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

const NON_ROYAL_STAGE_IDS = [
  'alphabet',
  'lax_vowel',
  'tense_vowel',
  'diphthong',
  'voiceless',
  'voiced',
  'final_s_es',
  'final_d_ed',
] as const;

function isNonRoyalStageId(value: unknown): value is (typeof NON_ROYAL_STAGE_IDS)[number] {
  return typeof value === 'string' && (NON_ROYAL_STAGE_IDS as readonly string[]).includes(value);
}

function parseSourceStageIdFromRoyalPairId(id: unknown): (typeof NON_ROYAL_STAGE_IDS)[number] | null {
  if (typeof id !== 'string') return null;
  // New format: rk:${stageId}:${questionId}
  if (id.startsWith('rk:')) {
    const parts = id.split(':');
    const maybeStage = parts[1];
    if (isNonRoyalStageId(maybeStage)) return maybeStage;
  }
  return null;
}

export function getStorageKeys() {
  return STORAGE_KEYS;
}

export function readProfile(): ProfileState | null {
  if (typeof window === 'undefined') return null;
  return safeJsonParse<ProfileState>(window.localStorage.getItem(STORAGE_KEYS.profile));
}

export function writeProfile(profile: ProfileState) {
  window.localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
}

export function readProgress(): JourneyProgress | null {
  if (typeof window === 'undefined') return null;
  return safeJsonParse<JourneyProgress>(window.localStorage.getItem(STORAGE_KEYS.progress));
}

export function writeProgress(progress: JourneyProgress) {
  window.localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
}

export function readLeaderboard(): LeaderboardEntry[] | null {
  if (typeof window === 'undefined') return null;
  const parsed = safeJsonParse<unknown>(window.localStorage.getItem(STORAGE_KEYS.leaderboard));
  if (!Array.isArray(parsed)) return null;
  return parsed as LeaderboardEntry[];
}

export function writeLeaderboard(entries: LeaderboardEntry[]) {
  window.localStorage.setItem(STORAGE_KEYS.leaderboard, JSON.stringify(entries));
}

export function getRunKey(stageId: StageId) {
  return `${STORAGE_KEYS.runPrefix}${stageId}` as const;
}

export function readRunState(stageId: StageId): RunState | null {
  if (typeof window === 'undefined') return null;
  const parsed = safeJsonParse<RunState>(window.sessionStorage.getItem(getRunKey(stageId)));
  if (!parsed) return null;

  // Backfill newer fields to avoid hydration/runtime crashes after updates.
  if (parsed.kind === 'royal') {
    const normalizePair = (p: any) => ({
      ...p,
      seconds: typeof p?.seconds === 'number' ? p.seconds : 12,
      sourceStageId: isNonRoyalStageId(p?.sourceStageId)
        ? p.sourceStageId
        : parseSourceStageIdFromRoyalPairId(p?.id) ?? 'alphabet',
      answer:
        p?.variant === 'phonetic_symbol'
          ? typeof p?.answer === 'string'
            ? p.answer.startsWith('/') && p.answer.endsWith('/')
              ? p.answer
              : `/${p.answer.replaceAll('/', '').trim()}/`
            : p?.answer
          : p?.variant === 'final_sound'
            ? typeof p?.answer === 'string'
              ? p.answer.replaceAll('/', '').trim()
              : p?.answer
            : p?.answer,
    });

    return {
      ...parsed,
      deck: Array.isArray(parsed.deck) ? parsed.deck.map(normalizePair) : [],
      activePairs: Array.isArray(parsed.activePairs) ? parsed.activePairs.map(normalizePair) : [],
      pairStartedAt: typeof (parsed as any).pairStartedAt === 'number' ? (parsed as any).pairStartedAt : parsed.startedAt,
    } as RunState;
  }

  return parsed;
}

export function writeRunState(stageId: StageId, run: RunState) {
  window.sessionStorage.setItem(getRunKey(stageId), JSON.stringify(run));
}

export function removeRunState(stageId: StageId) {
  window.sessionStorage.removeItem(getRunKey(stageId));
}

export function getResultKey(stageId: StageId) {
  return `${STORAGE_KEYS.resultPrefix}${stageId}` as const;
}

export function readStageResult(stageId: StageId): StageResult | null {
  if (typeof window === 'undefined') return null;
  const parsed = safeJsonParse<StageResult>(window.sessionStorage.getItem(getResultKey(stageId)));
  if (!parsed) return null;
  return {
    ...parsed,
    durationSeconds: typeof (parsed as any).durationSeconds === 'number' ? (parsed as any).durationSeconds : 0,
  };
}

export function writeStageResult(stageId: StageId, result: StageResult) {
  window.sessionStorage.setItem(getResultKey(stageId), JSON.stringify(result));
}

export function clearStageResult(stageId: StageId) {
  window.sessionStorage.removeItem(getResultKey(stageId));
}

export function readSfxEnabled(): boolean | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(STORAGE_KEYS.sfxEnabled);
  if (raw === null) return null;
  return raw === '1';
}

export function writeSfxEnabled(enabled: boolean) {
  window.localStorage.setItem(STORAGE_KEYS.sfxEnabled, enabled ? '1' : '0');
}
