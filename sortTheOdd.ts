/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array: number[]) {
  const odd: number[] = [];
  array.map((a) => {
    if (a % 2 != 0) {
      odd.push(a);
    }
  });
  const oddSorted = odd.sort((a, b) => {
    return a - b;
  });

  const result = array.map((b) => {
    if (b % 2 != 0) {
      return oddSorted.shift();
    } else return b;
  });
  return result;
}

// Alternative solution using forEach
function sortTheOdd(arr: number[]): number[] {
  const oddNumbers = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let oddIndex = 0;

  return arr.map((num) => {
    if (num % 2 !== 0) {
      return oddNumbers[oddIndex++];
    }
    return num;
  });
}

// Alternative solution using filter and map
function sortTheArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
