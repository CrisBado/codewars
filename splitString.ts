/* 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd 
number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
  if (str.length % 2 === 0) {
    return str.match(/(..?)/g);
  } else if (str.length % 2 != 0) {
    const appendedStr = str + "_";
    return appendedStr.match(/(..?)/g);
  }
}

// Alternative solution
function solution(str) {
  const appendedStr = str.length % 2 === 0 ? str : str + "_";
  return appendedStr.match(/(..?)/g);
}
