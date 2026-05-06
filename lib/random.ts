export function shuffle<T>(items: ReadonlyArray<T>): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function sampleOne<T>(items: ReadonlyArray<T>): T {
  if (items.length === 0) {
    throw new Error('Cannot sample from empty list.');
  }
  const idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

export function sampleManyUnique<T>(items: ReadonlyArray<T>, count: number): T[] {
  if (count <= 0) return [];
  if (items.length < count) {
    throw new Error(`Not enough items to sample ${count}. Available: ${items.length}`);
  }
  return shuffle(items).slice(0, count);
}

