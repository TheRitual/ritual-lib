import extractWords from './extract-words';

describe('Extract Words Function', () => {
  const extracted = extractWords('Dwa? Różne! #Słowa');

  it('Extracts words', () => {
    expect(extracted.words).toStrictEqual(['Dwa?', 'Różne!', '#Słowa']);
  });

  it('Extracts words without signs', () => {
    expect(extracted.clearWords).toStrictEqual(['Dwa', 'Różne', 'Słowa']);
  });
});





































