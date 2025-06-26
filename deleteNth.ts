/*

Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

function deleteNth(arr: number[], n: number): number[] {
  const countVal: { [key: number]: number } = {};
  const result: number[] = [];
  for (const val of arr) {
    if (countVal[val]) {
      countVal[val] += 1;
    } else {
      countVal[val] = 1;
    }
    if (countVal[val] <= n) {
      result.push(val);
    }
  }
  return result;
}

// Alternative solution
function deleteNthOccurence(arr: number[], n: number): number[] {
  const count: { [key: number]: number } = {};
  const result: number[] = [];
  for (const val of arr) {
    count[val] = (count[val] || 0) + 1;
    if (count[val] <= n) {
      result.push(val);
    }
  }
  return result;
}

// alternative solution using filter
function deleteNthFilter(arr: number[], n: number): number[] {
  const count: { [key: number]: number } = {};
  return arr.filter((val) => {
    count[val] = (count[val] || 0) + 1;
    return count[val] <= n;
  });
}
