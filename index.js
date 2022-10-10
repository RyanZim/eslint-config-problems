'use strict';
module.exports = {
  env: {
    es2020: true, // this also sets ecmaVersion parser option to 2020
  },
  extends: 'eslint:recommended',
  reportUnusedDisableDirectives: true,
  rules: {
    // OVERRIDES FOR 'eslint:recommended'
    'no-debugger': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }], // Allow empty catch statements
    'no-constant-condition': ['error', { checkLoops: false }], // Allow while (true)
    'no-unused-vars': ['error', { caughtErrors: 'all' }], // Don't allow unused error argument in catch blocks
    // WARNINGS
    'no-console': 'warn',
    'no-alert': 'warn',
    // PROBLEMS
    // https://eslint.org/docs/latest/rules/#possible-problems
    'array-callback-return': ['error', { checkForEach: true }],
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-self-compare': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'require-atomic-updates': 'error',
    // https://eslint.org/docs/latest/rules/#suggestions
    'accessor-pairs': 'error',
    'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: false },
      },
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'strict': 'error',
    'yoda': ['error', 'never', { onlyEquality: true }],
  },
};
