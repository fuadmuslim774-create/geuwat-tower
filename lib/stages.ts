import type { StageDefinition, StageId } from '../types/geuwat';

export const STAGES: StageDefinition[] = [
  {
    id: 'alphabet',
    number: 1,
    title: 'Alphabet',
    shortTitle: 'Alphabet',
    description:
      'Kuasai 26 huruf English alphabet. Stage ini memadukan pengenalan bunyi huruf (audio) dan mini spelling bee.',
    accentColor: '#FF00FF',
    glow: 'rgba(255,0,255,0.4)',
    initial: 'A',
  },
  {
    id: 'lax_vowel',
    number: 2,
    title: 'Lax Vowel',
    shortTitle: 'Lax',
    description:
      'Latih bunyi vowel lax: ʌ ɪ ʊ ɛ ə ɚ. Tebak simbol IPA dari kata yang kamu dengar.',
    accentColor: '#00F0FF',
    glow: 'rgba(0,240,255,0.4)',
    initial: 'LV',
  },
  {
    id: 'tense_vowel',
    number: 3,
    title: 'Tense Vowel',
    shortTitle: 'Tense',
    description:
      'Latih bunyi vowel tense: ɑ i u æ ɔ. Tebak simbol IPA dari kata yang kamu dengar.',
    accentColor: '#BC13FE',
    glow: 'rgba(188,19,254,0.4)',
    initial: 'TV',
  },
  {
    id: 'diphthong',
    number: 4,
    title: 'Diphthong',
    shortTitle: 'Diphthong',
    description:
      'Latih 8 diphthong (aɪ eɪ ɔɪ ɪə eə ʊə oʊ aʊ). Tebak simbol IPA dari kata yang kamu dengar.',
    accentColor: '#39FF14',
    glow: 'rgba(57,255,20,0.4)',
    initial: 'D',
  },
  {
    id: 'voiceless',
    number: 5,
    title: 'Voiceless Consonant',
    shortTitle: 'Voiceless',
    description:
      'Latih konsonan tanpa getaran (voiceless): p t k f θ s ʃ ʧ. Satu run = 8 soal (1 soal tiap sound).',
    accentColor: '#FF8C00',
    glow: 'rgba(255,140,0,0.4)',
    initial: 'VL',
  },
  {
    id: 'voiced',
    number: 6,
    title: 'Voiced Consonant',
    shortTitle: 'Voiced',
    description:
      'Latih konsonan dengan getaran (voiced): b d g v ð z ʒ ʤ. Satu run = 8 soal (1 soal tiap sound).',
    accentColor: '#FFFF33',
    glow: 'rgba(255,255,51,0.4)',
    initial: 'VD',
  },
  {
    id: 'final_s_es',
    number: 7,
    title: 'Final Sound -S/-ES',
    shortTitle: 'Final S',
    description:
      'Tebak bunyi akhir plural -s/-es. Setiap run: 9 soal (3 soal /s/, 3 soal /z/, 3 soal /ɪz/).',
    accentColor: '#FF3131',
    glow: 'rgba(255,49,49,0.4)',
    initial: 'S',
  },
  {
    id: 'final_d_ed',
    number: 8,
    title: 'Final Sound -D/-ED',
    shortTitle: 'Final ED',
    description:
      'Tebak bunyi akhir past tense -ed. Setiap run: 9 soal (3 soal /t/, 3 soal /d/, 3 soal /ɪd/).',
    accentColor: '#0096FF',
    glow: 'rgba(0,150,255,0.4)',
    initial: 'ED',
  },
  {
    id: 'royal_king',
    number: 9,
    title: 'Royal King',
    shortTitle: 'Royal King',
    description:
      'Boss stage: matching mode. Ambil 20 pair acak dari gabungan semua stage sebelumnya. One-hit fail.',
    accentColor: '#FFBF00',
    glow: 'rgba(255,191,0,0.5)',
    initial: '👑',
  },
];

export const STAGE_BY_ID = Object.fromEntries(STAGES.map((stage) => [stage.id, stage])) as Record<
  StageId,
  StageDefinition
>;

export const STAGE_ORDER: StageId[] = STAGES.sort((a, b) => a.number - b.number).map((stage) => stage.id);

export function getNextStageId(stageId: StageId): StageId | null {
  const idx = STAGE_ORDER.indexOf(stageId);
  if (idx < 0) return null;
  return STAGE_ORDER[idx + 1] ?? null;
}
