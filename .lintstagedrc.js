const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{scss,css,html,json,js,jsx,ts,tsx}': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
