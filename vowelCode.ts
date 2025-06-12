/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the 
following pattern:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
*/

export function encode(string: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  const as = string.split("");
  const sd = as.map((a) => {
    if (vowels.includes(a)) {
      return vowels.indexOf(a) + 1;
    }
    return a;
  });
  return sd.join("");
}
