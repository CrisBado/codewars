/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/
function cleanString(s: string): string {
  const result: string[] = [];
  for (const char of s) {
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  }
  return result.join("");
}
// Alternative solution
function cleanString(s: string): string {
  let result = "";
  for (const char of s) {
    if (char === "#") {
      result = result.slice(0, -1);
    } else {
      result += char;
    }
  }
  return result;
}

export const meeting = (s: string) => {
  return s
    .split(";")
    .map((f) => `(${f.toUpperCase().split(":").reverse().join(", ")})`)
    .sort()
    .join("");
};
