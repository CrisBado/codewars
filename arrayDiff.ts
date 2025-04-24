/*
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
*/

function arrayDiff(a: number[], b: number[]): number[] {
  const difference: number[] = [];

  a.forEach((element) => {
    //If elements in a is not in b push it to difference
    if (!b.includes(element)) {
      difference.push(element);
    }
  });
  return difference;
}

// Alternative solution
const arrayDiff = (a: number[], b: number[]): number[] => {
  return a.filter((item) => !b.includes(item));
};
