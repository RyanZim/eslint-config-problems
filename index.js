'use strict';
module.exports = {
  env: {
    es2020: true, // this also sets ecmaVersion parser option to 2020
  },
  extends: 'eslint:recommended',
  reportUnusedDisableDirectives: true,
  rules: {
    // First, turn down some eslint:recommended rules
    'no-debugger': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
    // Allow empty catch statements
    'no-empty': ['error', { allowEmptyCatch: true }],
    // Allow while (true)
    'no-constant-condition': ['error', { checkLoops: false }],
    // Don't allow unused error argument in catch blocks
    'no-unused-vars': ['error', { caughtErrors: 'all' }],
    // Additional warnings
    'no-console': 'warn',
    'no-alert': 'warn',
    // Additional problems
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-return': 'error',
    'prefer-regex-literals': 'error',
    'yoda': ['error', 'never', { onlyEquality: true }],
    'strict': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-new-object': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // ES2015+ specific problems
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    // Force esnext features
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false },
      },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    // NOTE: Very opinionated:
    'prefer-const': 'error',
  },
};
