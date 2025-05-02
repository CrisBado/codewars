/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that
occur more than once in the input string. The input string can be assumed to contain only 
alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text: string): number {
  const lowerText = text.toLowerCase();
  const charCount: { [key: string]: number } = {};
  let count = 0;

  for (const char of lowerText) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const key in charCount) {
    if (charCount[key] > 1) {
      count++;
    }
  }

  return count;
}
