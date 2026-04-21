/* 
Complete the function which returns the only unique number from an array.
All numbers in the unsorted array are present twice, except the one you have to find. 
The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. 
The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
*/

function findUnique(numbers: number[]): number | undefined {
  const unique = numbers.filter(
    (num) => numbers.indexOf(num) === numbers.lastIndexOf(num),
  );

  return unique[0];
}
