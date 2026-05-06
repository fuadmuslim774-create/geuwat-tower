export type StageId =
  | 'alphabet'
  | 'lax_vowel'
  | 'tense_vowel'
  | 'diphthong'
  | 'voiceless'
  | 'voiced'
  | 'final_s_es'
  | 'final_d_ed'
  | 'royal_king';

export type QuestionVariant =
  | 'alphabet_choice'
  | 'alphabet_spelling'
  | 'phonetic_symbol'
  | 'final_sound'
  | 'royal_match';

export type StageDefinition = {
  id: StageId;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  accentColor: string;
  glow: string;
  initial: string;
};

export type StageProgress = {
  unlocked: boolean;
  completed: boolean;
  bestPercentage: number;
  lastPercentage: number;
  bestTimeSeconds: number | null;
  lastTimeSeconds: number | null;
  attempts: number;
  lastPlayedAt: number | null;
};

export type JourneyProgress = {
  journeyStartedAt: number | null;
  journeyCompletedAt: number | null;
  stages: Record<StageId, StageProgress>;
};

export type AvatarId = 'chibi1' | 'chibi2' | 'chibi3' | 'chibi4';

export type ProfileState = {
  profileId: string;
  batchId: string | null;
  username: string;
  avatarId: AvatarId;
  usernameChanged: boolean;
};

export type LeaderboardEntry = {
  profileId: string;
  player: string;
  avatarId: AvatarId;
  rankStageId: StageId;
  timeSec: number | null;
  updatedAt: number;
};

export type QuizRunState = {
  kind: 'quiz';
  stageId: StageId;
  questions: StageQuestion[];
  index: number;
  correctCount: number;
  questionStartedAt: number;
  startedAt: number;
};

export type RoyalRunState = {
  kind: 'royal';
  stageId: 'royal_king';
  deck: RoyalPair[];
  cursor: number;
  activePairs: RoyalPair[];
  handOrder: string[];
  correctCount: number;
  pairStartedAt: number;
  startedAt: number;
};

export type RunState = QuizRunState | RoyalRunState;

export type StageResult = {
  stageId: StageId;
  percentage: number;
  correct: number;
  total: number;
  didComplete: boolean;
  durationSeconds: number;
  finishedAt: number;
};

export type RoyalPair = {
  id: string;
  prompt: string;
  answer: string;
  variant: QuestionVariant;
  seconds: number;
  sourceStageId: Exclude<StageId, 'royal_king'>;
};

export type AlphabetChoiceQuestion = {
  id: string;
  variant: 'alphabet_choice';
  letter: string;
  correctIpa: string;
  choices: [string, string, string];
  seconds: number;
};

export type AlphabetSpellingQuestion = {
  id: string;
  variant: 'alphabet_spelling';
  meaning: string;
  answer: string;
  topicId: string;
  seconds: number;
};

export type PhoneticSymbolQuestion = {
  id: string;
  variant: 'phonetic_symbol';
  word: string;
  ipa: string;
  correctSymbol: string;
  choices: [string, string, string];
  seconds: number;
};

export type FinalSoundQuestion = {
  id: string;
  variant: 'final_sound';
  word: string;
  correctSound: string;
  choices: [string, string, string];
  seconds: number;
};

export type StageQuestion =
  | AlphabetChoiceQuestion
  | AlphabetSpellingQuestion
  | PhoneticSymbolQuestion
  | FinalSoundQuestion;
