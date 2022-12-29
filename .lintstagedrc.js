/** @format */

module.exports = {
  // Type check TypeScript files
  'src/*/*.(ts|tsx)': () => 'npm run tsc --noEmit',

  // Lint check

  'src/**/*.(ts|tsx)': () => 'npm run eslint --fix .',

  // Prettify TS and JS files
  'src/**/*.(ts|tsx|js)': (filenames) => [
    `npm run prettier --write ${filenames.map((filename) => `"${filename}"`).join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '*src/*/*.(md|json)': (filenames) =>
    `npm run prettier --write ${filenames.map((filename) => `"${filename}"`).join(' ')}`,
};
