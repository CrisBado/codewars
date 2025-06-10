/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/

function inArray(a1: string[], a2: string[]): string[] {
  const resultArray: string[] = [];

  a1.forEach((a) => {
    a2.forEach((b) => {
      if (b.includes(a)) {
        resultArray.push(a);
      }
    });
  });

  return [...new Set(resultArray)].sort();
}
