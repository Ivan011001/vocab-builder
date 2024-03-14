export function shortenWord(word: string, short: number): string {
  if (word.length <= short) {
    return word;
  }

  return word.slice(0, short) + "...";
}
