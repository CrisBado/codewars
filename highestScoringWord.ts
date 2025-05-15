/* Given a string of words, you need to find the highest scoring word. 
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

export const high = (str: string): string => {
  const s = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const fh = str.split(" ");
  const jd = fh.map((w) => {
    return w;
  });
  const kd: number[] = [];
  const ss = jd.map((s, i) => {
    const sf = s.toLowerCase().charCodeAt(0) - 97 + 1;
    return kd.push(sf);
  });

  console.log(kd.sort((a, b) => a - b));

  return "";
};
