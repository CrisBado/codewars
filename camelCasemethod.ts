/* Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have 
their first letter capitalized and spaces must be removed.
Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord" */

function camelCase(str: string): string {
  if (!str) {
    return str;
  }

  const resultArray: string[] = [];

  const convertToArray = str.toLowerCase().split(" ");
  convertToArray.forEach((a) => {
    resultArray.push(`${a[0].toUpperCase()}${a.substring(1)}`);
  });

  return resultArray.join("");
}

// Alternative solution

function camelCaseMethod(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
