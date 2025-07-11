/* 
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/
export function stringTransformer(str: any) {
  if (str === "") return;
  const ksf = str.split();
  //   console.log(ksf)
  const fg: string[] = [];
  ksf.map((a: string) => {
    a.split("").map((a: string) => {
      if (a === a.toUpperCase()) {
        //         console.log(a.toLowerCase())
        fg.push(a.toLowerCase());
      }
      if (a === a.toLowerCase()) {
        //         console.log(a.toUpperCase())
        fg.push(a.toUpperCase());
      }
    });
  });
  console.log(fg.join("").split(" ").reverse().join(" "));
  return fg.join("").split(" ").reverse().join(" ");
}
