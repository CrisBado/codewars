/* 
Consider the following expansion:

"3(ab)"     expands to "ababab"    -- because "ab" repeats 3 times
"2(a3(b))"  expands to "abbbabbb"  -- "a3(b)" expands to "abbb" and that repeats twice
Given a string, return the expansion of that string.

Rules:

The input is guaranteed to be well-formed and balanced.
Multipliers are single digits in the range 1–9, and are optional.
Every multiplier is immediately followed by a parenthesised group.
After a group is fully expanded, nothing appears beyond the final closing parenthesis.
Lowercase letters and digits are the only characters that appear.
*/

function solve(str: string): string {
  let result = "";
  let i = 0;

  while (i < str.length) {
    const char = str[i];

    if (/[1-9]/.test(char)) {
      const multiplier = parseInt(char, 10);

      let start = i + 2;
      let bracketCount = 1;
      let end = start;

      while (bracketCount > 0) {
        if (str[end] === "(") bracketCount++;
        if (str[end] === ")") bracketCount--;
        end++;
      }
      const innerContent = str.substring(start, end - 1);
      const expandedInner = solve(innerContent);

      result += expandedInner.repeat(multiplier);

      i = end;
    } else if (/[a-z]/.test(char)) {
      result += char;
      i++;
    } else {
      i++;
    }
  }

  return result;
}
