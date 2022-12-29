import XRegExp from 'xregexp';

const extractWords = (text: string): { words: Array<string>; clearWords: Array<string> } => {
  const words = text.split(' ');
  const regex = XRegExp('[^\\s\\p{Latin}]+', 'g');
  const clearWords = text.split(' ').map((word) => XRegExp.replace(word, regex, ''));
  return {
    words,     clearWords,
  };
};

export default extractWords;
