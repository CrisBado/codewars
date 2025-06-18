/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  const turnArray = string.split("");
  const result = turnArray.map((e) => {
    if (e === e.toUpperCase()) {
      return ` ${e}`;
    } else return e;
  });

  return result.join("");
}

// Alternative solution
function solution(string) {
  return string.replace(/[A-Z]/g, function (c: string) {
    return " " + c;
  });
}
