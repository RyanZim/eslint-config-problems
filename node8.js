'use strict';
module.exports = {
  extends: 'problems',
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    // https://github.com/eslint/eslint/issues/10482#issuecomment-397761810
    'no-restricted-properties': [
      'error',
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead of Math.pow()',
      },
    ],
  },
};
