export type AlphabetItem = {
  letter: string;
  ipa: string;
  example: string;
};

export type SpellingItem = {
  id: string;
  word: string;
  meaning: string;
  topicId?: string;
};

export type WordDefinition = {
  id: string;
  word: string;
  definitionEn: string;
  definitionId: string;
  topicId?: string;
};

export type SymbolCategory = 'vowel' | 'diphthong' | 'consonant';

export type SymbolExample = {
  word: string;
  ipa: string;
};

export type SymbolItem = {
  id: string;
  category: SymbolCategory;
  symbol: string;
  examples: [SymbolExample, SymbolExample, SymbolExample];
};

export type FinalSoundCategory = 's_es' | 'd_ed';

export type FinalSoundClass = '/s/' | '/z/' | '/ɪz/' | '/t/' | '/d/' | '/ɪd/';

export type FinalSoundItem = {
  id: string;
  category: FinalSoundCategory;
  word: string;
  finalSound: FinalSoundClass;
  ruleKey: string;
};

export type FinalSoundBank = {
  s_es: FinalSoundItem[];
  d_ed: FinalSoundItem[];
};

