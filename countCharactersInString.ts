/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the 
result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count(string): { [key: string]: number } {
  const charCount = {};
  for (const char of string) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

// Alternative solution
function count(string: string): { [key: string]: number } {
  return string.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}
