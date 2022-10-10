# eslint-config-problems

`eslint-config-problems` is an [ESLint](http://eslint.org/) config that doesn't regulate your code style. It only catches actual problems with your code.

It's designed for use with [Prettier](https://prettier.io/), the opinionated code formatter; but you could also use this as a solid base config to add stylistic rules on top of.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Rules](#rules)
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
- Force usage of ES2015+ features supported by Node.js v10+
- Point out places the code could be made shorter. For example:
  ```js
  if (someCondition) return someValue;
  else {
    // Do something else
  }
  ```
  The `else` block is unneeded, since the `if` block contains a `return` statement. `eslint-config-problems` will point this out to you (or auto-fix with the `--fix` option).

`eslint-config-problems` also sets `ecmaVersion: 2020` in the `parserOptions`, so that ESLint can parse modern code (including `BigInt`) with no additional setup.

### I disagree with rule X; you missed rule Y

If you disagree; feel free to open an issue. I'm open to changing rules if you have a good reason.

If I missed a rule that prevents an actual problem or is otherwise in keeping with the general guidelines above, please open an issue as well; I just might add it.

## Installation & Usage

`eslint-config-problems` doesn't set any environments by default, other than the `es6` environment. So you'll have to manually set your environment in your ESLint config. Here's a [list of environments](http://eslint.org/docs/user-guide/configuring#specifying-environments).

If you're using ES Modules, you will need to set `sourceType: module` in the `parserOptions`, like this:

```yaml
parserOptions:
  sourceType: module
```

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
