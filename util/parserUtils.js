function getSyllablesFromWord(word) {
  if (!word) return 0;
  if (word.toLowerCase().length <= 3) {
    return 1;
  }

  const elidedRegex = /(?:[^laeiouy]|es|ed|lle|le|[^laeiouy]e)$/;
  const yRegex = /^y/;
  const syllableCounterRegex = /([aeiouy]{1,2})/g;
  const syllables = word
    .toLowerCase()
    .replace(elidedRegex, "")
    .replace(yRegex, "")
    .match(syllableCounterRegex);

  const numberOfSyllables = syllables ? syllables.length : 1;
  return numberOfSyllables;
}

function measureSentence(sentence) {
  if (!sentence || sentence === "") return 0;
  return sentence.split(/\s/).reduce((totalSyllables, word) => {
    const syllables = getSyllablesFromWord(word);
    const newTotal = (totalSyllables += syllables);
    return newTotal;
  }, 0);
}

module.exports = {
  measureSentence,
  getSyllablesFromWord,
};
