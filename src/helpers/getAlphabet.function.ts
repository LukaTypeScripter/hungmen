export function getAlphabetMap(): Map<string, boolean> {
  const alphabetMap = new Map<string, boolean>();
  for (let i = 0; i < 26; i++) {
    alphabetMap.set(String.fromCharCode(97 + i), false);
  }
  return alphabetMap;
}