/* 
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

*/

export function findUniq(arr: string[]): string {
  const arrays = arr.map((a) => {
    return [...new Set(a.toLowerCase())].sort().join("");
  });
  return arr.find(
    (str, i) => arrays.indexOf(arrays[i]) === arrays.lastIndexOf(arrays[i]),
  )!;
}
