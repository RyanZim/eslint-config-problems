'use strict';
module.exports = {
  extends: 'problems',
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
