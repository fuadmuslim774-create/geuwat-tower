import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const SOURCE_ROOT = path.resolve(repoRoot, '..');

const SOURCES = {
  alphabet: path.join(SOURCE_ROOT, 'member-app', 'app', 'skill', 'pronunciation', 'alphabet', 'constants.ts'),
  phoneticSymbols: path.join(SOURCE_ROOT, 'PhoneticSymbols-app', 'data', 'symbolBank.ts'),
  finalSound: path.join(SOURCE_ROOT, 'final-sound-quiz-app', 'data', 'finalSoundBank.ts'),
  spellingDir: path.join(SOURCE_ROOT, 'Spelling-Bee-Exercise', 'data', 'spellingBank'),
  definitionsDir: path.join(SOURCE_ROOT, 'Spelling-Bee-Exercise', 'data', 'definitions'),
};

const OUT_DIR = path.join(repoRoot, 'data', 'ingested');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function stripTs(source) {
  let out = source;
  out = out.replace(/^\s*import\s+[^;]+;\s*$/gm, '');
  out = out.replace(/^\s*export\s+type\s+[^;]+;\s*$/gm, '');
  out = out.replace(/export\s+interface\s+[^{]+{[\s\S]*?}\s*$/gm, '');
  out = out.replace(/export\s+type\s+[^{=]+=[\s\S]*?;\s*$/gm, '');
  out = out.replace(/\bas\s+const\b/g, '');
  out = out.replace(/:\s*[^=;]+(?==)/g, '');
  out = out.replace(/\bexport\s+const\b/g, 'const');
  return out;
}

function evalModule(tsPath, { exportNames = null, defaultExport = false } = {}) {
  const raw = fs.readFileSync(tsPath, 'utf8');
  let src = stripTs(raw);

  if (defaultExport) {
    src = src.replace(/export\s+default\s+([A-Za-z0-9_]+)\s*;\s*$/gm, 'module.exports = $1;');
  }

  if (exportNames && exportNames.length > 0) {
    src += `\nmodule.exports = { ${exportNames.join(', ')} };`;
  }

  const sandbox = { module: { exports: {} }, exports: {} };
  vm.runInNewContext(src, sandbox, { filename: tsPath });
  return sandbox.module.exports;
}

function listTopicFiles(dir) {
  const ignore = new Set(['index.ts', 'meta.ts', 'loaders.ts', 'types.ts']);
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.ts') && !ignore.has(name))
    .sort();
}

function toTsLiteral(value) {
  return JSON.stringify(value, null, 2);
}

function writeTs(outPath, content) {
  fs.writeFileSync(outPath, content.replace(/\r?\n/g, '\n'), 'utf8');
}

function main() {
  ensureDir(OUT_DIR);

  const alphabet = evalModule(SOURCES.alphabet, { exportNames: ['ALPHABET_DATA', 'QUICK_SPELLING_WORDS'] });
  const phonetic = evalModule(SOURCES.phoneticSymbols, { exportNames: ['SYMBOL_BANK'] });
  const finalSound = evalModule(SOURCES.finalSound, { exportNames: ['FINAL_SOUND_BANK'] });

  const spellingTopics = listTopicFiles(SOURCES.spellingDir).map((f) => path.basename(f, '.ts'));
  const spellingByTopic = {};
  for (const file of listTopicFiles(SOURCES.spellingDir)) {
    const topicId = path.basename(file, '.ts');
    const items = evalModule(path.join(SOURCES.spellingDir, file), { defaultExport: true });
    spellingByTopic[topicId] = items;
  }

  const definitionTopics = listTopicFiles(SOURCES.definitionsDir).map((f) => path.basename(f, '.ts'));
  const definitionsByTopic = {};
  for (const file of listTopicFiles(SOURCES.definitionsDir)) {
    const topicId = path.basename(file, '.ts');
    const items = evalModule(path.join(SOURCES.definitionsDir, file), { defaultExport: true });
    definitionsByTopic[topicId] = items;
  }

  writeTs(
    path.join(OUT_DIR, 'alphabet.ts'),
    `import type { AlphabetItem } from '../../types/ingested';\n\nexport const ALPHABET_DATA: AlphabetItem[] = ${toTsLiteral(
      alphabet.ALPHABET_DATA,
    )};\n\nexport const QUICK_SPELLING_WORDS: string[] = ${toTsLiteral(alphabet.QUICK_SPELLING_WORDS)};\n`,
  );

  writeTs(
    path.join(OUT_DIR, 'phoneticSymbols.ts'),
    `import type { SymbolItem } from '../../types/ingested';\n\nexport const SYMBOL_BANK: SymbolItem[] = ${toTsLiteral(
      phonetic.SYMBOL_BANK,
    )};\n`,
  );

  writeTs(
    path.join(OUT_DIR, 'finalSound.ts'),
    `import type { FinalSoundBank } from '../../types/ingested';\n\nexport const FINAL_SOUND_BANK: FinalSoundBank = ${toTsLiteral(
      finalSound.FINAL_SOUND_BANK,
    )};\n`,
  );

  writeTs(
    path.join(OUT_DIR, 'spelling.ts'),
    `import type { SpellingItem } from '../../types/ingested';\n\nexport const SPELLING_TOPICS: string[] = ${toTsLiteral(
      spellingTopics,
    )};\n\nexport const SPELLING_BANK_BY_TOPIC: Record<string, SpellingItem[]> = ${toTsLiteral(spellingByTopic)};\n`,
  );

  writeTs(
    path.join(OUT_DIR, 'definitions.ts'),
    `import type { WordDefinition } from '../../types/ingested';\n\nexport const DEFINITION_TOPICS: string[] = ${toTsLiteral(
      definitionTopics,
    )};\n\nexport const DEFINITIONS_BY_TOPIC: Record<string, WordDefinition[]> = ${toTsLiteral(
      definitionsByTopic,
    )};\n`,
  );

  console.log('[GEUWAT TOWER] Ingest completed:', OUT_DIR);
}

main();

