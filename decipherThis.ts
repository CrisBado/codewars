/* 
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
Examples

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'
*/

export function decipherThis(str: string): string {
  //     console.log(String.fromCharCode(72))

  const array = str.split(" ");

  return array
    .map((e: string) => {
      const num = parseInt(e, 10);
      const containsAlphabet = /[a-z]/i.test(e);

      const secondLetter = containsAlphabet
        ? e.match(/[a-z]/i)
        : String.fromCharCode(num);
      //       console.log(secondLetter)
      const firstLetter = String.fromCharCode(num);
      const lastLetter = containsAlphabet ? e.charAt(e.length - 1) : "";
      console.log(` ${lastLetter},  ${secondLetter}, `);

      return "kd";
    })
    .join("");
}
