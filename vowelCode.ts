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
  const toArray = string.split("");
  const encode = toArray.map((a) => {
    if (vowels.includes(a)) {
      return vowels.indexOf(a) + 1;
    }
    return a;
  });
  return encode.join("");
}
// Alternate solution using a regular expression
export function encode(string: string): string {
  return string.replace(/[aeiou]/g, (match) =>
    ("aeiou".indexOf(match) + 1).toString()
  );
}

/*
Step 2: Create a function called decode() to replace all the numbers in a given string with the corresponding vowels according 
to the pattern above. For example, decode("h2ll4") would return "hello".
*/

export function decode(string: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  const toArray = string.split("");
  const decoded = toArray.map((char) => {
    if ("12345".includes(char)) {
      return vowels[parseInt(char) - 1];
    }
    return char;
  });
  return decoded.join("");
}

// Alternate solution using a regular expression
export function decode(string: string): string {
  return string.replace(/[1-5]/g, (match) => "aeiou"[parseInt(match) - 1]);
}
