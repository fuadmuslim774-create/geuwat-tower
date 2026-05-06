import { describe, expect, it } from 'vitest';
import { createNewRun, ROYAL_DECK_SIZE, ROYAL_TRAY_SIZE } from './run';
import type { QuizRunState, RoyalRunState, StageQuestion } from '../types/geuwat';

const LAX = ['ʌ', 'ɪ', 'ʊ', 'ɛ', 'ə', 'ɚ'] as const;
const TENSE = ['ɑ', 'i', 'u', 'æ', 'ɔ'] as const;
const DIPHTHONG = ['aɪ', 'eɪ', 'ɔɪ', 'ɪə', 'eə', 'ʊə', 'oʊ', 'aʊ'] as const;
const VOICELESS_POOL = ['p', 't', 'k', 'f', 'θ', 's', 'ʃ', 'ʧ'] as const;
const VOICED_POOL = ['b', 'd', 'g', 'v', 'ð', 'z', 'ʒ', 'ʤ'] as const;

function asQuiz(run: unknown): QuizRunState {
  const r = run as QuizRunState;
  if (r.kind !== 'quiz') throw new Error('Expected quiz run');
  return r;
}

function asRoyal(run: unknown): RoyalRunState {
  const r = run as RoyalRunState;
  if (r.kind !== 'royal') throw new Error('Expected royal run');
  return r;
}

function uniq<T>(items: ReadonlyArray<T>): T[] {
  return Array.from(new Set(items));
}

function expectChoicesValid(q: { choices: [string, string, string] }, correct: string) {
  expect(q.choices).toHaveLength(3);
  expect(uniq(q.choices).length).toBe(3);
  expect(q.choices).toContain(correct);
}

describe('GEUWAT TOWER run builders', () => {
  it('builds Alphabet stage as 10 mixed questions', () => {
    const run = asQuiz(createNewRun('alphabet'));
    expect(run.questions).toHaveLength(10);

    const variants = run.questions.map((q) => q.variant);
    expect(variants.filter((v) => v === 'alphabet_choice')).toHaveLength(5);
    expect(variants.filter((v) => v === 'alphabet_spelling')).toHaveLength(5);

    const choiceQs = run.questions.filter((q) => q.variant === 'alphabet_choice');
    const letters = choiceQs.map((q) => (q.variant === 'alphabet_choice' ? q.letter : ''));
    expect(uniq(letters).length).toBe(5);
    choiceQs.forEach((q) => {
      if (q.variant !== 'alphabet_choice') return;
      expect(q.seconds).toBe(12);
      expectChoicesValid(q, q.correctIpa);
    });

    const spellingQs = run.questions.filter((q) => q.variant === 'alphabet_spelling');
    const topics = spellingQs.map((q) => (q.variant === 'alphabet_spelling' ? q.topicId : ''));
    expect(uniq(topics).length).toBe(5);
    spellingQs.forEach((q) => {
      if (q.variant !== 'alphabet_spelling') return;
      expect(q.seconds).toBe(20);
      expect(q.answer.length).toBeGreaterThan(0);
    });

    const ids = run.questions.map((q) => q.id);
    expect(uniq(ids).length).toBe(ids.length);
  });

  it('builds lax/tense/diphthong with required unique symbols', () => {
    const lax = asQuiz(createNewRun('lax_vowel'));
    expect(lax.questions).toHaveLength(6);
    expect(uniq(lax.questions.map((q) => (q.variant === 'phonetic_symbol' ? q.correctSymbol : ''))).length).toBe(6);
    lax.questions.forEach((q) => {
      if (q.variant !== 'phonetic_symbol') return;
      expect(LAX).toContain(q.correctSymbol as any);
      expect(q.seconds).toBe(12);
      expectChoicesValid(q, q.correctSymbol);
    });

    const tense = asQuiz(createNewRun('tense_vowel'));
    expect(tense.questions).toHaveLength(5);
    tense.questions.forEach((q) => {
      if (q.variant !== 'phonetic_symbol') return;
      expect(TENSE).toContain(q.correctSymbol as any);
    });

    const diph = asQuiz(createNewRun('diphthong'));
    expect(diph.questions).toHaveLength(8);
    diph.questions.forEach((q) => {
      if (q.variant !== 'phonetic_symbol') return;
      expect(DIPHTHONG).toContain(q.correctSymbol as any);
    });
  });

  it('builds voiceless/voiced with unique random picks', () => {
    for (let i = 0; i < 6; i += 1) {
      const voiceless = asQuiz(createNewRun('voiceless'));
      expect(voiceless.questions).toHaveLength(8);
      const symbols = voiceless.questions.map((q) => (q.variant === 'phonetic_symbol' ? q.correctSymbol : ''));
      expect(uniq(symbols).length).toBe(8);
      symbols.forEach((s) => expect(VOICELESS_POOL).toContain(s as any));

      const voiced = asQuiz(createNewRun('voiced'));
      expect(voiced.questions).toHaveLength(8);
      const vSymbols = voiced.questions.map((q) => (q.variant === 'phonetic_symbol' ? q.correctSymbol : ''));
      expect(uniq(vSymbols).length).toBe(8);
      vSymbols.forEach((s) => expect(VOICED_POOL).toContain(s as any));
    }
  });

  it('builds final sounds with 3/3/3 distribution', () => {
    const s = asQuiz(createNewRun('final_s_es'));
    expect(s.questions).toHaveLength(9);
    const sCounts = s.questions.reduce<Record<string, number>>((acc, q) => {
      if (q.variant !== 'final_sound') return acc;
      acc[q.correctSound] = (acc[q.correctSound] ?? 0) + 1;
      return acc;
    }, {});
    expect(sCounts['s']).toBe(3);
    expect(sCounts['z']).toBe(3);
    expect(sCounts['ɪz']).toBe(3);

    const d = asQuiz(createNewRun('final_d_ed'));
    expect(d.questions).toHaveLength(9);
    const dCounts = d.questions.reduce<Record<string, number>>((acc, q) => {
      if (q.variant !== 'final_sound') return acc;
      acc[q.correctSound] = (acc[q.correctSound] ?? 0) + 1;
      return acc;
    }, {});
    expect(dCounts['t']).toBe(3);
    expect(dCounts['d']).toBe(3);
    expect(dCounts['ɪd']).toBe(3);
  });

  it('builds Royal King from stage outputs (63 pairs) and tray size 5', () => {
    const run = asRoyal(createNewRun('royal_king'));
    expect(run.deck).toHaveLength(ROYAL_DECK_SIZE);
    expect(uniq(run.deck.map((p) => p.id)).length).toBe(ROYAL_DECK_SIZE);

    expect(run.activePairs).toHaveLength(ROYAL_TRAY_SIZE);
    expect(run.handOrder).toHaveLength(ROYAL_TRAY_SIZE);
    expect(uniq(run.handOrder).length).toBe(ROYAL_TRAY_SIZE);
    run.handOrder.forEach((id) => {
      expect(run.activePairs.some((p) => p.id === id)).toBe(true);
    });
  });
});
