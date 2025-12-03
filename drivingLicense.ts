/*
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code 
using the below information

1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"

Your task is to code a UK driving license number using an Array of data. The Array will look like
['John', 'James', 'Smith', '01-Jan-2000', 'M']

Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female

You will need to output the full 16 digit driving license number, in all UPPERCASE.

*/

export function driver(data: Array<string>): string {
  let r = data[2].toUpperCase().substring(0, 5);
  let i;
  console.log(data[2]);
  for (i = data[2].length; i < 5; i++) {
    r += "9";
  }
  let date = new Date(data[3]);
  r += date.getFullYear().toString().charAt(2); // 6
  r += ("0" + (date.getMonth() + 1 + (data[4] === "M" ? 0 : 50))).slice(-2); // 7-8
  r += ("0" + date.getDate()).slice(-2); //9 - 10
  r += date.getFullYear().toString().charAt(3); // 11
  r +=
    (data[0].length ? data[0].charAt(0) : "9") +
    (data[1].length ? data[1].charAt(0) : "9");
  r += "9AA";

  return r;
}
