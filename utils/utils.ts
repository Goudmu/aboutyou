export const splitTextIntoWords = (texts: string[]) => {
  return texts
    .map((text, textIndex) => {
      const words = text.split(" ").map((word, wordIndex) => ({
        id: textIndex * 1000 + wordIndex, // Ensuring unique IDs
        word,
      }));
      return words;
    })
    .flat(); // Flatten the array of arrays
};

export const splitTextIntoLines = (texts: string[]) => {
  const lines: { id: number; words: string[] }[] = [];

  texts.forEach((text, textIndex) => {
    const words = text.split(" ");
    const line = { id: textIndex, words };
    lines.push(line);
  });

  return lines;
};
