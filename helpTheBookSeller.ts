/*
A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

Task
You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

Example
# the bookseller's stocklist:
"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

# list of categories: 
"A", "B", "C", "W"

# result:
"(A : 20) - (B : 114) - (C : 50) - (W : 0)"
*/

export function stockList(listOfArt: string[], listOfCat: string[]): string {
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return "";
  }

  const categoryCounts: { [key: string]: number } = {};

  for (const category of listOfCat) {
    categoryCounts[category] = 0;
  }

  for (const art of listOfArt) {
    const [code, quantityStr] = art.split(" ");
    const category = code.charAt(0);
    const quantity = parseInt(quantityStr, 10);

    if (category in categoryCounts) {
      categoryCounts[category] += quantity;
    }
  }

  const resultParts: string[] = [];
  for (const category of listOfCat) {
    resultParts.push(`(${category} : ${categoryCounts[category]})`);
  }

  return resultParts.join(" - ");
}
