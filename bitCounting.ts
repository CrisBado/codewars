/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary 
representation of that number. You can guarantee that input is non-negative.
*/

export function countBits(n: number): number {
  return n
    .toString(2)
    .split("")
    .reduce((acc, bit) => acc + (bit === "1" ? 1 : 0), 0);
}
