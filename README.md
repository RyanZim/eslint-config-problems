# eslint-config-problems

`eslint-config-problems` is an [ESLint](http://eslint.org/) config that doesn't regulate your code style. It only catches actual problems with your code.

It's designed for use with [Prettier](https://prettier.io/), the opinionated code formatter; but you could also use this as a solid base config to add stylistic rules on top of.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Rules](#rules)
  - [ES2015+](#es2015)
  - [`node8` sub-config](#node8-sub-config)
  - [I disagree with rule X; you missed rule Y](#i-disagree-with-rule-x-you-missed-rule-y)
- [Installation & Usage](#installation--usage)
  - [Just ESLint](#just-eslint)
  - [With `eslint-plugin-prettier`](#with-eslint-plugin-prettier)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Rules

Rules were chosen based on the following criteria:

- No stylistic rules; nothing that Prettier can fix
- Prevent guaranteed runtime errors (i.e. no undefined variables)
- Disallow "evil" things like `eval`
- Disallow archaic language features like `with`
- Disallow obvious bad practices like `new Number(13)`
- Point out places the code could be made shorter. For example:
  ```js
  if (someCondition) return someValue;
  else {
    // Do something else
  }
  ```
  The `else` block is unneeded, since the `if` block contains a `return` statement. `eslint-config-problems` will point this out to you (or auto-fix with the `--fix` option).

### ES2015+

By default `eslint-config-problems` forces the use of ES2015+ features supported by Node.js versions 6 and higher. Here are the rules enforced:

- `no-var` - Use `let`/`const` instead.
- `object-shorthand` - Use object shorthand where possible.
- `prefer-arrow-callback` - Use arrow functions as callbacks where possible.
- `prefer-numeric-literals` - Don't use `parseInt()` to write binary, octal, and hexadecimal numbers, use the literal form instead.
- `prefer-template` - Use template strings instead of string concatenation.
- `prefer-spread` - Use the spread operator instead of `.apply` where possible.
- `prefer-rest-params` - Use rest parameters instead of `arguments`.
- `prefer-const` - I realize this is very opinionated; if you don't like it, add `prefer-const: off` to your config.

### I disagree with rule X; you missed rule Y

If you disagree; feel free to open an issue. I'm open to changing rules if you have a good reason.

If I missed a rule that prevents an actual problem or is otherwise in keeping with the general guidelines above, please open an issue as well; I just might add it.

## sub-configs

### `node8`

There is a sub-config, accessible at `problems/node8`, which forces ES features supported by Node.js 8+. Specifically, it enforces the use of the exponentiation operator instead of `Math.pow()`.

It also sets `ecmaVersion: 2017` in the `parserOptions`, so that ESLint can parse `async`/`await` code with no additional setup.

### `node10`

The `problems/node10` sub-config forces ES2018 features supported by Node.js v10+. Specifically, it disallows the use of `Object.assign()` where the object spread operator could be used.

It also sets `ecmaVersion: 2018` in the `parserOptions`, so that ESLint can parse the ES2018 syntax that Node.js v10 supports.

## Installation & Usage

`eslint-config-problems` doesn't set any environments by default, other than the `es6` environment (to turn on the ES2015 parser, allow `Promise`, etc.) So you'll have to manually set your environment in your ESLint config. Here's a [list of environments](http://eslint.org/docs/user-guide/configuring#specifying-environments).

### Just ESLint

    npm install -D eslint eslint-config-problems

In your **eslintrc.yaml**:

```yaml
extends: 'problems'
env:
  # Set your environments here; for example:
  node: true
```

### With [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)

    npm install -D eslint prettier eslint-config-problems eslint-plugin-prettier

In your **eslintrc.yaml**:

```yaml
extends: 'problems'
env:
  # Set your environments here; for example:
  node: true
plugins:
  - prettier
rules:
  - prettier/prettier: error
```

## License

[ISC](LICENSE)
