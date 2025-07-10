/* 
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'
*/
function dashatize(num: number): string {
  if (isNaN(num)) return "NaN";
  const str = Math.abs(num).toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const digit = str[i];
    if (parseInt(digit) % 2 !== 0) {
      if (i > 0 && result[result.length - 1] !== "-") {
        result += "-";
      }
      result += digit + "-";
    } else {
      result += digit;
    }
  }

  // Remove trailing dash if it exists
  if (result.endsWith("-")) {
    result = result.slice(0, -1);
  }

  return result;
}
// Alternative solution using regex
function dashatize(num: number): string {
  if (isNaN(num)) return "NaN";
  return Math.abs(num)
    .toString()
    .replace(/([13579])/g, "-$1-")
    .replace(/^-|-$/g, "");
}
