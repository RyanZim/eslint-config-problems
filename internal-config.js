'use strict';

// This is the internal config used for linting the code of
// eslint-config-problems itself

module.exports = [
  require('./index.js'),
  {
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
];
