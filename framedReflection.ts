/*
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, 
complete with the mirror frame. Example:
'Hello World'
*/

export function mirror(text: string): string {
  const textInverted = text
    .split(" ")
    .map((word) => word.split("").reverse().join(""));

  const longestWordLength = textInverted.reduce(
    (acc, cur) => Math.max(acc, cur.length),
    0
  );

  const border = "*".repeat(longestWordLength + 4);

  const formattedText = textInverted.map((word) => {
    const len = word.length;
    const padding = " ".repeat(longestWordLength - len);
    return `* ${word}${padding} *`;
  });

  return [border, ...formattedText, border].join("\n");
}
