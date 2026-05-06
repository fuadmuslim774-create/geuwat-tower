import { ALPHABET_DATA } from '../data/ingested/alphabet';
import { DEFINITIONS_BY_TOPIC } from '../data/ingested/definitions';
import { FINAL_SOUND_BANK } from '../data/ingested/finalSound';
import { SYMBOL_BANK } from '../data/ingested/phoneticSymbols';
import { SPELLING_BANK_BY_TOPIC, SPELLING_TOPICS } from '../data/ingested/spelling';
import type { FinalSoundItem, SpellingItem, SymbolItem } from '../types/ingested';
import type {
  AlphabetChoiceQuestion,
  AlphabetSpellingQuestion,
  FinalSoundQuestion,
  PhoneticSymbolQuestion,
  QuizRunState,
  RoyalPair,
  RoyalRunState,
  RunState,
  StageId,
  StageQuestion,
} from '../types/geuwat';
import { sampleManyUnique, sampleOne, shuffle } from './random';

const SECONDS_PER_VARIANT = {
  alphabet_choice: 12,
  phonetic_symbol: 12,
  alphabet_spelling: 20,
  final_sound: 20,
} as const;

const LAX_SYMBOLS = ['ʌ', 'ɪ', 'ʊ', 'ɛ', 'ə', 'ɚ'] as const;
const TENSE_SYMBOLS = ['ɑ', 'i', 'u', 'æ', 'ɔ'] as const;
const DIPHTHONG_SYMBOLS = ['aɪ', 'eɪ', 'ɔɪ', 'ɪə', 'eə', 'ʊə', 'oʊ', 'aʊ'] as const;
// Consonant stages focus on voiced/voiceless pairs with matching production (place/manner).
const VOICELESS_POOL = ['p', 't', 'k', 'f', 'θ', 's', 'ʃ', 'ʧ'] as const;
const VOICED_POOL = ['b', 'd', 'g', 'v', 'ð', 'z', 'ʒ', 'ʤ'] as const;

function stripSlashes(value: string): string {
  return value.replaceAll('/', '').trim();
}

function withSlashes(value: string): string {
  return `/${stripSlashes(value)}/`;
}

function buildIpaChoices(correctIpa: string): [string, string, string] {
  const pool = Array.from(new Set(ALPHABET_DATA.map((item) => item.ipa)));
  const distractors = sampleManyUnique(
    pool.filter((ipa) => ipa !== correctIpa),
    2,
  );
  return shuffle([correctIpa, distractors[0], distractors[1]]) as [string, string, string];
}

function buildSymbolChoices(symbols: string[], correct: string): [string, string, string] {
  const distractors = sampleManyUnique(
    symbols.filter((s) => s !== correct),
    2,
  );
  return shuffle([correct, distractors[0], distractors[1]]) as [string, string, string];
}

function buildAlphabetQuestions(): StageQuestion[] {
  const letters = sampleManyUnique(ALPHABET_DATA, 5);
  const letterQuestions: AlphabetChoiceQuestion[] = letters.map((item) => ({
    id: `alphabet-choice:${item.letter}`,
    variant: 'alphabet_choice',
    letter: item.letter,
    correctIpa: item.ipa,
    choices: buildIpaChoices(item.ipa),
    seconds: SECONDS_PER_VARIANT.alphabet_choice,
  }));

  const validTopics = SPELLING_TOPICS.filter((t) => Array.isArray(SPELLING_BANK_BY_TOPIC[t]) && SPELLING_BANK_BY_TOPIC[t].length > 0);
  const pickedTopics = sampleManyUnique(validTopics, 5);
  const spellingQuestions: AlphabetSpellingQuestion[] = pickedTopics.map((topicId) => {
    const item = sampleOne(SPELLING_BANK_BY_TOPIC[topicId] as SpellingItem[]);
    return {
      id: `alphabet-spell:${item.id}`,
      variant: 'alphabet_spelling',
      meaning: item.meaning,
      answer: item.word,
      topicId,
      seconds: SECONDS_PER_VARIANT.alphabet_spelling,
    };
  });

  return shuffle([...letterQuestions, ...spellingQuestions]);
}

function findSymbolItem(symbol: string): SymbolItem {
  const item = SYMBOL_BANK.find((it) => it.symbol === symbol);
  if (!item) {
    throw new Error(`Missing symbol in SYMBOL_BANK: ${symbol}`);
  }
  return item;
}

function buildPhoneticQuestions(symbols: string[], count: number): PhoneticSymbolQuestion[] {
  const selectedSymbols = count >= symbols.length ? shuffle([...symbols]) : sampleManyUnique(symbols, count);
  const questions: PhoneticSymbolQuestion[] = selectedSymbols.map((symbol) => {
    const item = findSymbolItem(symbol);
    const example = sampleOne(item.examples);
    return {
      id: `phonetic:${item.id}:${example.word}`,
      variant: 'phonetic_symbol',
      word: example.word,
      ipa: example.ipa,
      correctSymbol: item.symbol,
      choices: buildSymbolChoices(selectedSymbols, item.symbol),
      seconds: SECONDS_PER_VARIANT.phonetic_symbol,
    };
  });
  return shuffle(questions);
}

function symbolsInIpa(ipa: string, pool: string[]): string[] {
  return pool.filter((sym) => ipa.includes(sym));
}

function buildConsonantQuestions(pool: string[]): PhoneticSymbolQuestion[] {
  // Pick one question per symbol, preferring examples whose IPA contains only that target symbol from the pool.
  const selectedSymbols = shuffle([...pool]);

  const questions: PhoneticSymbolQuestion[] = selectedSymbols.map((symbol) => {
    const item = findSymbolItem(symbol);

    const unambiguous = item.examples.filter((ex) => {
      const present = symbolsInIpa(ex.ipa, pool);
      return present.includes(symbol) && present.length === 1;
    });

    const example = unambiguous.length > 0 ? sampleOne(unambiguous) : sampleOne(item.examples);
    const present = symbolsInIpa(example.ipa, pool);
    const forbidden = new Set(present.filter((s) => s !== symbol));

    const distractorPool = pool.filter((s) => s !== symbol && !forbidden.has(s));
    const fallbackPool = pool.filter((s) => s !== symbol);
    const source = distractorPool.length >= 2 ? distractorPool : fallbackPool;
    const distractors = sampleManyUnique(source, 2);

    return {
      id: `phonetic:${item.id}:${example.word}`,
      variant: 'phonetic_symbol',
      word: example.word,
      ipa: example.ipa,
      correctSymbol: item.symbol,
      choices: shuffle([item.symbol, distractors[0], distractors[1]]) as [string, string, string],
      seconds: SECONDS_PER_VARIANT.phonetic_symbol,
    };
  });

  return shuffle(questions);
}

function groupByFinalSound(items: FinalSoundItem[]): Record<string, FinalSoundItem[]> {
  return items.reduce<Record<string, FinalSoundItem[]>>((acc, item) => {
    const key = stripSlashes(item.finalSound);
    acc[key] = acc[key] ? [...acc[key], item] : [item];
    return acc;
  }, {});
}

function buildFinalSoundQuestions(stageId: 'final_s_es' | 'final_d_ed'): FinalSoundQuestion[] {
  const category = stageId === 'final_s_es' ? 's_es' : 'd_ed';
  const bankItems = FINAL_SOUND_BANK[category];
  const grouped = groupByFinalSound(bankItems);

  const classOrder = category === 's_es' ? (['s', 'z', 'ɪz'] as const) : (['t', 'd', 'ɪd'] as const);

  const picked = classOrder.flatMap((sound) => sampleManyUnique(grouped[sound] ?? [], 3));
  const choices = classOrder as unknown as [string, string, string];

  return shuffle(
    picked.map((item) => ({
      id: `final:${item.id}`,
      variant: 'final_sound',
      word: item.word,
      correctSound: stripSlashes(item.finalSound),
      choices: shuffle([...choices]) as [string, string, string],
      seconds: SECONDS_PER_VARIANT.final_sound,
    })),
  );
}

function buildQuizQuestions(stageId: StageId): StageQuestion[] {
  switch (stageId) {
    case 'alphabet':
      return buildAlphabetQuestions();
    case 'lax_vowel':
      return buildPhoneticQuestions([...LAX_SYMBOLS], 6);
    case 'tense_vowel':
      return buildPhoneticQuestions([...TENSE_SYMBOLS], 5);
    case 'diphthong':
      return buildPhoneticQuestions([...DIPHTHONG_SYMBOLS], 8);
    case 'voiceless':
      return buildConsonantQuestions([...VOICELESS_POOL]);
    case 'voiced':
      return buildConsonantQuestions([...VOICED_POOL]);
    case 'final_s_es':
    case 'final_d_ed':
      return buildFinalSoundQuestions(stageId);
    default:
      throw new Error(`Stage is not a quiz stage: ${stageId}`);
  }
}

function createQuizRun(stageId: Exclude<StageId, 'royal_king'>): QuizRunState {
  const questions = buildQuizQuestions(stageId);
  const now = Date.now();
  return {
    kind: 'quiz',
    stageId,
    questions,
    index: 0,
    correctCount: 0,
    startedAt: now,
    questionStartedAt: now,
  };
}

function buildRoyalCandidatesFromStages(): RoyalPair[] {
  // Royal King must draw from the same "per-run output" used by stages 01-08.
  // This keeps counts and difficulty consistent with the journey.
  const stageIds: Array<Exclude<StageId, 'royal_king'>> = [
    'alphabet',
    'lax_vowel',
    'tense_vowel',
    'diphthong',
    'voiceless',
    'voiced',
    'final_s_es',
    'final_d_ed',
  ];

  const candidates: RoyalPair[] = [];
  for (const stageId of stageIds) {
    const questions = buildQuizQuestions(stageId);
    for (const q of questions) {
      if (q.variant === 'alphabet_choice') {
        candidates.push({
          id: `rk:${stageId}:${q.id}`,
          prompt: q.letter,
          answer: q.correctIpa,
          variant: q.variant,
          seconds: q.seconds,
          sourceStageId: stageId,
        });
      } else if (q.variant === 'alphabet_spelling') {
        candidates.push({
          id: `rk:${stageId}:${q.id}`,
          prompt: q.meaning,
          answer: q.answer,
          variant: q.variant,
          seconds: q.seconds,
          sourceStageId: stageId,
        });
      } else if (q.variant === 'phonetic_symbol') {
        candidates.push({
          id: `rk:${stageId}:${q.id}`,
          prompt: q.word,
          answer: withSlashes(q.correctSymbol),
          variant: q.variant,
          seconds: q.seconds,
          sourceStageId: stageId,
        });
      } else if (q.variant === 'final_sound') {
        candidates.push({
          id: `rk:${stageId}:${q.id}`,
          prompt: q.word,
          answer: q.correctSound,
          variant: q.variant,
          seconds: q.seconds,
          sourceStageId: stageId,
        });
      }
    }
  }

  // Definitions are ingested for future hints; keep runtime purely local.
  void ALPHABET_DATA;
  void SPELLING_TOPICS;
  void SPELLING_BANK_BY_TOPIC;
  void SYMBOL_BANK;
  void FINAL_SOUND_BANK;
  void DEFINITIONS_BY_TOPIC;

  return candidates;
}

export const ROYAL_TRAY_SIZE = 5;
export const ROYAL_DECK_SIZE = 63;

function createRoyalRun(): RoyalRunState {
  const deck = shuffle(buildRoyalCandidatesFromStages());
  const now = Date.now();
  const activePairs = deck.slice(0, ROYAL_TRAY_SIZE);
  const handOrder = shuffle(activePairs.map((p) => p.id));
  return {
    kind: 'royal',
    stageId: 'royal_king',
    deck,
    cursor: activePairs.length,
    activePairs,
    handOrder,
    correctCount: 0,
    pairStartedAt: now,
    startedAt: now,
  };
}

export function createNewRun(stageId: StageId): RunState {
  if (stageId === 'royal_king') return createRoyalRun();
  return createQuizRun(stageId);
}
