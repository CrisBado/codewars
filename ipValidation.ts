/* 
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they 
consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

*/

export function isValidIP(str: string): boolean {
  const array = str.split("");
  let ld: string[] = [];
  let hs: string[] = [];

  array.map((e) => {
    if (e === ".") ld.push(e);
    if (Number(e) >= 0 && Number(e) <= 255) hs.push(e);
  });

  const jk = hs.length === 4 && ld.length === 3;
  return jk;
}
