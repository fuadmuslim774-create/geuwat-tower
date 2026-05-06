import { describe, expect, it } from 'vitest';
import type { StageId } from '../../../../types/geuwat';

// Test helper: validate StageId
const VALID_STAGE_IDS: StageId[] = [
  'alphabet',
  'lax_vowel',
  'tense_vowel',
  'diphthong',
  'voiceless',
  'voiced',
  'final_s_es',
  'final_d_ed',
  'royal_king',
];

function isValidStageId(value: unknown): value is StageId {
  return typeof value === 'string' && VALID_STAGE_IDS.includes(value as StageId);
}

// Test helper: validate timeSec
function isValidTimeSec(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

// Test helper: validate userId
function isValidUserId(value: unknown): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}

describe('Leaderboard Sync API - Input Validation', () => {
  describe('StageId validation', () => {
    it('accepts all valid stage IDs', () => {
      VALID_STAGE_IDS.forEach((stageId) => {
        expect(isValidStageId(stageId)).toBe(true);
      });
    });

    it('rejects invalid stage IDs', () => {
      expect(isValidStageId('invalid_stage')).toBe(false);
      expect(isValidStageId('')).toBe(false);
      expect(isValidStageId(null)).toBe(false);
      expect(isValidStageId(undefined)).toBe(false);
      expect(isValidStageId(123)).toBe(false);
      expect(isValidStageId({})).toBe(false);
    });
  });

  describe('timeSec validation', () => {
    it('accepts valid non-negative numbers', () => {
      expect(isValidTimeSec(0)).toBe(true);
      expect(isValidTimeSec(100)).toBe(true);
      expect(isValidTimeSec(3600)).toBe(true);
      expect(isValidTimeSec(999999)).toBe(true);
    });

    it('accepts null and undefined', () => {
      expect(isValidTimeSec(null)).toBe(true);
      expect(isValidTimeSec(undefined)).toBe(true);
    });

    it('rejects negative numbers', () => {
      expect(isValidTimeSec(-1)).toBe(false);
      expect(isValidTimeSec(-100)).toBe(false);
    });

    it('rejects non-finite numbers', () => {
      expect(isValidTimeSec(Infinity)).toBe(false);
      expect(isValidTimeSec(-Infinity)).toBe(false);
      expect(isValidTimeSec(NaN)).toBe(false);
    });

    it('rejects non-numeric values', () => {
      expect(isValidTimeSec('100')).toBe(false);
      expect(isValidTimeSec({})).toBe(false);
      expect(isValidTimeSec([])).toBe(false);
    });
  });

  describe('userId validation', () => {
    it('accepts valid non-empty strings', () => {
      expect(isValidUserId('user-123')).toBe(true);
      expect(isValidUserId('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
      expect(isValidUserId('abc')).toBe(true);
    });

    it('rejects empty strings', () => {
      expect(isValidUserId('')).toBe(false);
      expect(isValidUserId('   ')).toBe(false);
    });

    it('rejects non-string values', () => {
      expect(isValidUserId(null)).toBe(false);
      expect(isValidUserId(undefined)).toBe(false);
      expect(isValidUserId(123)).toBe(false);
      expect(isValidUserId({})).toBe(false);
    });
  });

  describe('Payload validation scenarios', () => {
    it('validates complete valid payload', () => {
      const payload = {
        userId: '550e8400-e29b-41d4-a716-446655440000',
        rankStageId: 'alphabet' as StageId,
        timeSec: 3600,
      };

      expect(isValidUserId(payload.userId)).toBe(true);
      expect(isValidStageId(payload.rankStageId)).toBe(true);
      expect(isValidTimeSec(payload.timeSec)).toBe(true);
    });

    it('validates payload with null timeSec', () => {
      const payload = {
        userId: '550e8400-e29b-41d4-a716-446655440000',
        rankStageId: 'royal_king' as StageId,
        timeSec: null,
      };

      expect(isValidUserId(payload.userId)).toBe(true);
      expect(isValidStageId(payload.rankStageId)).toBe(true);
      expect(isValidTimeSec(payload.timeSec)).toBe(true);
    });

    it('detects invalid payload with missing userId', () => {
      const payload = {
        userId: '',
        rankStageId: 'alphabet' as StageId,
        timeSec: 100,
      };

      expect(isValidUserId(payload.userId)).toBe(false);
    });

    it('detects invalid payload with invalid rankStageId', () => {
      const payload = {
        userId: '550e8400-e29b-41d4-a716-446655440000',
        rankStageId: 'invalid_stage',
        timeSec: 100,
      };

      expect(isValidStageId(payload.rankStageId)).toBe(false);
    });

    it('detects invalid payload with negative timeSec', () => {
      const payload = {
        userId: '550e8400-e29b-41d4-a716-446655440000',
        rankStageId: 'alphabet' as StageId,
        timeSec: -50,
      };

      expect(isValidTimeSec(payload.timeSec)).toBe(false);
    });
  });
});
