export function capitalizeWord(word: string | null | undefined) {
  if (!word) {
    return;
  }

  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

  return capitalizedWord;
}
