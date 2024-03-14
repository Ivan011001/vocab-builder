export function shortenWord(
  word: string | null | undefined,
  short: number
): string {
  if (!word) {
    return "";
  }

  if (word.length <= short) {
    return word;
  }

  return word.slice(0, short) + "...";
}
