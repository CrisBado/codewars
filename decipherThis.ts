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
  const array = str.split(" ");

  const result = array.map((e: string) => {
    const number = [];
    const string = [];
    for (let i = 0; i < e.length; i++) {
      if (!Number.isNaN(parseInt(e.charAt(i)))) {
        number.push(e.charAt(i));
      } else {
        string.push(e.charAt(i));
      }
    }

    const asciiNumber = number.join("");
    const convertToNumber = parseInt(asciiNumber, 10);
    const newFirstElement = String.fromCharCode(convertToNumber);

    const newArray: string[] = [newFirstElement].concat(string);

    // Replace the second element ('e') with the last element ('a')
    const secondIndex = 1;
    const lastIndex = newArray.length - 1;
    const temp = newArray[secondIndex];
    newArray[secondIndex] = newArray[lastIndex];
    newArray[lastIndex] = temp;

    return newArray.join("");
  });

  return result.join(" ");
}
