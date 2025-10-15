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

// Alternative solution
export function longestConsec(strarr: string[], k: number): string {
  if (k <= 0 || k > strarr.length) return "";

  let longest = "";

  for (let i = 0; i <= strarr.length - k; i++) {
    const currentConcatenatedString = strarr.slice(i, i + k).join("");
    if (currentConcatenatedString.length > longest.length) {
      longest = currentConcatenatedString;
    }
  }

  return longest;
}
