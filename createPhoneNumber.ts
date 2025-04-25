/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers: any[]): string {
  const areaCode = numbers.splice(0, 3).toString().replace(/,/g, "");
  numbers.splice(3, 0, "-");
  const restofNumbers = numbers.toString().replace(/,/g, "");
  return `(${areaCode}) ${restofNumbers}`;
}

// Alternative solution
function createPhoneNumber(numbers: number[]): string {
  const codeOfCountry = numbers.slice(0, 3).join("");
  const middleNumbers = numbers.slice(3, 6).join("");
  const lastNumbers = numbers.slice(6, 10).join("");

  return `(${codeOfCountry}) ${middleNumbers}-${lastNumbers}`;
}
