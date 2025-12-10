/*
You get a text and have to shift the vowels by n positions to the right. (Negative value for n should shift to the left.)

Position means the vowel's position if taken as one item in a list of all vowels within the string.

A shift by 1 would mean, that every vowel shifts to the place of the next vowel.

Shifting over the edges of the text should continue at the other edge.

Vowels are "aeiou" / "AEIOU".

If text is null or empty, then simply return back the original text.
*/

export function vowelShift(text: string, n: number) {
  if (!text) return text;
  const regex = /[aeiou]/gi;
  const matched = text.match(regex) || [];

  const tail = matched.splice(-(n % matched.length));
  const rotated = tail.concat(matched);
  let currVowel = -1;

  const replacer = () => {
    currVowel += 1;
    return rotated[currVowel % rotated.length];
  };

  return text.replace(regex, replacer);
}
