import extractWords from './extract-words';

test('Extract Words 1', () => {
  expect(extractWords('Dwa Słowa')).toStrictEqual(['Dwa', 'Słowa']);
});

test('Extract Words 2', () => {
  expect(extractWords('To Trzy Słowa')).toStrictEqual(['To', 'Trzy', 'Słowa']);
});

test('Extract Words 3', () => {
  expect(extractWords('To są Cztery Słowa')).toStrictEqual(['To', 'są', 'Cztery', 'Słowa']);
});
