'use strict';
// This config also require ES2015 features only supported by Node 6+
module.exports = {
  extends: 'problems',
  rules: {
    'prefer-spread': 'error',
    'prefer-rest-params': 'error',
  },
};
