'use strict';
const defaultsDeep = require('lodash.defaultsdeep');

// This is the internal config used for linting the code of
// eslint-config-problems itself

module.exports = defaultsDeep({}, require('./index.js'), {
  env: { node: true },
});
