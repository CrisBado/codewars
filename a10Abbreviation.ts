/* 
Write a function that takes a string and turns any and all "words" (see below) within that string 
of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a 
space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, 
then the last letter (eg. "elephant ride" => "e6t r2e").
*/

export function abbreviate(str: string): string {
  const array = str.split(/([^A-Za-z])/g);

  return array
    .map((e: string) => {
      if (e.length <= 3) return e;
      const numberOfChar = e.length - 2;
      const firstLetter = e.charAt(0);
      const lastLetter = e.charAt(e.length - 1);
      return `${firstLetter}${numberOfChar}${lastLetter}`;
    })
    .join("");
}
