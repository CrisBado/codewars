/* 
Write a function that given an integer n >= 0, returns an array of n ascending length subarrays, all filled with 1s.

0 => [ ]
1 => [ [1] ]
2 => [ [1], [1, 1] ]
3 => [ [1], [1, 1], [1, 1, 1] ]
*/

export function pyramid(n: number): number[][] {
  const result: number[][] = [];
  for (let i = 1; i <= n; i++) {
    result.push(Array(i).fill(1));
  }
  return result;
}
