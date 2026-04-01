/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros<T>(arr: T[]) {
  const moved = [
    ...arr.filter((item) => item !== 0),
    ...arr.filter((item) => item === 0),
  ];
  return moved;
}

// Alternative solution using a single pass
function moveZerosSinglePass<T>(arr: T[]) {
  const result: T[] = [];
  let zeroCount = 0;

  for (const item of arr) {
    if (item === 0) {
      zeroCount++;
    } else {
      result.push(item);
    }
  }

  return [...result, ...Array(zeroCount).fill(0)];
}
