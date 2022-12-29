import extractWords from './extract-words';

describe('Extract Words Function', () => {
  const extracted = extractWords('Dwa? Różne! #Słowa');

  it('Checking if all of functions got 3 outcomes', () => {
    expect(extracted.clearWords.length).toBe(3);
    expect(extracted.words.length).toBe(3);
  });

  it('Extracts words', () => {
    expect(extracted.words).toStrictEqual(['Dwa?', 'Różne!', '#Słowa']);
  });

  it('Extracts words without signs', () => {
    expect(extracted.clearWords).toStrictEqual(['Dwa', 'Różne', 'Słowa']);
  });
});
