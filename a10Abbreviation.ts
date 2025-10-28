/* 
Write a function that takes a string and turns any and all "words" (see below) within that string 
of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a 
space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, 
then the last letter (eg. "elephant ride" => "e6t r2e").
*/

export function abbreviate(str: string): string {
  const asd = str.split(" ");

  asd.map((a: string) => {
    if (a.length <= 3) return a;
    const num = a.length - 2;
    const first = a.charAt(0);
    const last = a.charAt(a.length - 1);
    return `${first}${num}${last}`;
  });

  return "string";
}
