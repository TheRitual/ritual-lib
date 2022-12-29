/** @format */

module.exports = {
  // Type check TypeScript files
  'src/*/*.(ts|tsx)': () => 'yarn tsc ./src --noEmit',

  // Lint check

  'src/**/*.(ts|tsx)': () => 'yarn eslint ./src --fix',

  // Prettify TS and JS files
  'src/**/*.(ts|tsx|js)': (filenames) => [
    `yarn prettier --write ${filenames.map((filename) => `"${filename}"`).join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '*src/*/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.map((filename) => `"${filename}"`).join(' ')}`,
};
