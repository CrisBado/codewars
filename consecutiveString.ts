export function longestConsec(strarr: string[], k: number): string {
  const result: string[] = [];
  let currentString = "";
  //   console.log(strarr)

  for (let i = 0; i < strarr.length; i++) {
    // Append the current element (converted to string)
    currentString += strarr[i];
    console.log(currentString);

    // Check if the current chunk is complete (i.e., we've processed N elements)
    if ((i + 1) % k === 0) {
      result.push(currentString);
      currentString = ""; // Reset for the next chunk
    }
  }

  return "sd";
}
