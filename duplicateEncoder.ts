/*
The goal of this exercise is to convert a string to a new string where each character in the new string 
is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the 
original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word: string): string {
  const lowerWord = word.toLowerCase();
  const charCount: { [key: string]: number } = {};

  for (const char of lowerWord) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let result = "";
  for (const char of lowerWord) {
    result += charCount[char] === 1 ? "(" : ")";
  }

  return result;
}

// Alternative solution

export function duplicateEncode(word: string) {
  const charCount: { [key: string]: number } = {};
  const result: any = [];
  const lowerCase = word.toLowerCase();

  for (const num of lowerCase) {
    charCount[num] = (charCount[num] || 0) + 1;
  }
  for (const num of lowerCase) {
    charCount[num] === 1 ? result.push("(") : result.push(")");
  }
  return result.join("");
}
