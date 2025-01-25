# eslint-config-problems

`eslint-config-problems` is an [ESLint](http://eslint.org/) config that doesn't regulate your code style. It only catches actual problems with your code.

It's designed for use with [Prettier](https://prettier.io/), the opinionated code formatter.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Rules](#rules)
  - [I disagree with rule X; you missed rule Y](#i-disagree-with-rule-x-you-missed-rule-y)
- [Installation & Usage](#installation--usage)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Rules

Rules were chosen based on the following criteria:

- No stylistic rules; nothing that Prettier can fix
- Prevent guaranteed runtime errors (i.e. no undefined variables)
- Disallow "evil" things like `eval`
- Disallow archaic language features like `with`
- Disallow obvious bad practices like `new Number(13)`
- Force usage of ES2015+ features
- Point out places the code could be made shorter. For example:
  ```js
  if (someCondition) return someValue;
  else {
    // Do something else
  }
  ```
  The `else` block is unneeded, since the `if` block contains a `return` statement. `eslint-config-problems` will point this out to you (or auto-fix with the `--fix` option).

### I disagree with rule X; you missed rule Y

If you disagree; feel free to open an issue. I'm open to changing rules if you have a good reason.

If I missed a rule that prevents an actual problem or is otherwise in keeping with the general guidelines above, please open an issue as well; I just might add it.

## Installation & Usage

_`eslint-config-problems` is designed to work with ESLint v9+; if you're still using ESLint v8 or earlier, use `eslint-config-problems` v8.0.0._

---

    npm install -D eslint eslint-config-problems

In your **eslint.config.js**:

```js
import problems from 'eslint-config-problems';

export default [
  problems,
  {
    rules: {
      // custom rules
    },
  },
];
```

## License

[ISC](LICENSE)
