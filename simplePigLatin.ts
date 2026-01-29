/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

export const pigIt = (str: string): string => {
  return str
    .split(" ")
    .map((word) => {
      if (/^[A-Za-z]+$/.test(word)) {
        const first = word.slice(0, 1);
        const rest = word.slice(1);
        return `${rest}${first}ay`;
      }
      return word;
    })
    .join(" ");
};
