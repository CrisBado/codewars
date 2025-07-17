/* 
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]: [string, number]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/
export function longestRepetition(text: string): [string, number] {
  if (text.length === 0) {
    return ["", 0];
  }

  let maxChar = text[0];
  let maxCount = 1;
  let currentChar = text[0];
  let currentCount = 1;

  for (let i = 1; i < text.length; i++) {
    if (text[i] === currentChar) {
      currentCount++;
    } else {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxChar = currentChar;
      }
      currentChar = text[i];
      currentCount = 1;
    }
  }

  // After the loop, check the last sequence
  if (currentCount > maxCount) {
    maxCount = currentCount;
    maxChar = currentChar;
  }

  return [maxChar, maxCount];
}
