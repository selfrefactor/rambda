# Contribution guidelines

Before opening PR, you need:

- to have the code of `selfrefactor/rambda-scripts` repo on the same level as `selfrefactor/rambda` as that repo contains all of the build logic. `git clone https://github.com/selfrefactor/rambda-scripts.git`

- to know that the source files are:

-- located in `source` folder
-- TypeScript source file is located at `files/index.d.ts`

- Final step for any code change is `yarn out` as it generates the output files.

## Fix a method

1. If the error is in `R.foo` then you need to write a test in `source/foo.spec.js`, that reproduces the bug.

2. Change `source/foo.js` so the tests are passing.

3. Run `yarn out`

## Fix a Typescript definition

1. You may add a new test to `source/foo-spec.ts` to reproduce the bug.

2. Apply your fix to `files/index.d.ts`.

3. Run `yarn test:typings` to confirm your fix.

> It is known that definitions of **R.compose/R.pipe** are far from perfect. The issue has been [previously discussed](https://github.com/selfrefactor/rambda/issues/466) but there is no obvious solution to it.

### Run Jest

Running `jest --watch` is possible but as they are many tests, I am unsure that this is the best option.

I'd suggest to temporarily change the file name in `package.json`

```json
  "scripts":{
    "dev": "jest source/foo.spec.js --watch"
  }
```

and then run `yarn dev`.

### Typescript definitions and method description

Edit `files/index.d.ts` and make the fix.

### Typescript errors in tests

use `// @ts-expect-error` when you write a test that is expected to fail.
