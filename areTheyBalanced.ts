/**
 Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
 */

function balance(left: string, right: string): string {
  //coding and coding....
  const arrayFromLeft = left.split("").map((e) => (e == "!" ? 2 : 3));
  const arrayFromRight = right.split("").map((e) => (e == "!" ? 2 : 3));

  const sumLeft = arrayFromLeft.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const sumRight = arrayFromRight.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sumLeft > sumRight ? "Left" : sumRight > sumLeft ? "Right" : "Balance";
}
