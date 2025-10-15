export function longestConsec(strarr: string[], k: number): string {
  const result: string[] = [];

  for (let i = 0; i < strarr.length - k + 1; i++) {
    let currentConcatenatedString = "";

    for (let j = 0; j < k; j++) {
      currentConcatenatedString += strarr[i + j];
    }
    result.push(currentConcatenatedString);
  }

  const longestElement = result.reduce((longest, current) => {
    if (current.length > longest.length) {
      return current;
    } else {
      return longest;
    }
  }, "");

  return longestElement;
}
