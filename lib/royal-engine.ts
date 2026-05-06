import type { RoyalPair, RoyalRunState } from '../types/geuwat';
import { shuffle } from './random';
import { ROYAL_TRAY_SIZE } from './run';

export type MatchAttemptResult = {
  nextRun: RoyalRunState;
  isCorrect: boolean;
  didFinish: boolean;
};

export function shuffleDeck(deck: ReadonlyArray<RoyalPair>): RoyalPair[] {
  return shuffle(deck);
}

export function applyMatchAttempt(
  run: RoyalRunState,
  targetId: string,
  handId: string,
): MatchAttemptResult {
  const targetExists = run.activePairs.some((pair) => pair.id === targetId);
  if (!targetExists) return { nextRun: run, isCorrect: false, didFinish: false };

  const isCorrect = targetId === handId;
  if (!isCorrect) {
    return { nextRun: run, isCorrect: false, didFinish: false };
  }

  const remainingActive = run.activePairs.filter((pair) => pair.id !== targetId);
  const remainingHandOrder = run.handOrder.filter((id) => id !== targetId);

  let cursor = run.cursor;

  // Avoid ambiguous boards (duplicate visible answers) whenever possible by swapping in a non-conflicting
  // next card from later in the deck. This keeps the run solvable on mobile when answers repeat (e.g. "ɪz").
  const activeAnswers = new Set(remainingActive.map((p) => p.answer));
  let nextDeck = run.deck;
  let nextPair: RoyalPair | null = null;

  if (cursor < run.deck.length) {
    const swapIdx = run.deck.findIndex((p, idx) => idx >= cursor && !activeAnswers.has(p.answer));
    if (swapIdx >= 0) {
      nextDeck = [...run.deck];
      const tmp = nextDeck[cursor];
      nextDeck[cursor] = nextDeck[swapIdx];
      nextDeck[swapIdx] = tmp;
    }

    nextPair = nextDeck[cursor] ?? null;
  }

  if (nextPair) {
    cursor += 1;
    remainingActive.push(nextPair);
    remainingHandOrder.push(nextPair.id);
  }

  const nextRun: RoyalRunState = {
    ...run,
    deck: nextDeck,
    cursor,
    activePairs: remainingActive,
    handOrder: shuffle(remainingHandOrder),
    correctCount: run.correctCount + 1,
  };

  if (nextRun.activePairs.length > ROYAL_TRAY_SIZE) {
    // Should never happen, but prevents layout break if deck/build changes.
    nextRun.activePairs = nextRun.activePairs.slice(0, ROYAL_TRAY_SIZE);
  }

  const didFinish = nextRun.correctCount >= run.deck.length;
  return { nextRun, isCorrect: true, didFinish };
}
