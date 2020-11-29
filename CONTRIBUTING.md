# Contribution guidelines

You need to have the code of `selfrefactor/rambda-scripts` repo on the same level as `selfrefactor/rambda` as that repo contains all of the build logic.

`git clone https://github.com/selfrefactor/rambda-scripts.git`

> Final step for any code change is `yarn out` as it generates the output files.

## Fix a method

1. If the error is in `R.foo` then you need to write a test in `source/foo.spec.js`, that reproduces the bug.

2. Change `source/foo.js` so the tests are passing.

3. Uncomment `// await runSingleBenchmark('foo')` line in `scripts/all-scripts/all-scripts.spec.js`.

4. Run `yarn out`

5. Restore the state of `scripts/all-scripts/all-scripts.spec.js` and commit

## Fix a Typescript definition

1. You may add a new test to `source/foo-spec.ts` to reproduce the bug.

2. Apply your fix to `files/index.d.ts`.

3. Run `yarn typings` to confirm your fix.

> It is known that definitions of **R.compose/R.pipe** are far from perfect. The issue has been [previously discussed](https://github.com/selfrefactor/rambda/issues/466) but there is no obvious solution to it.

## Add new `Rambda` method using helper

There is a helper script to assist you, when creating a new method in Rambda/Rambdax.

1. Run `yarn new NEW_METHOD_NAME`, e.g. `yarn new zip.with` or `yarn new zipWith`.

2. Edit `source/NEW_METHOD_NAME.js`

3. Edit `source/NEW_METHOD_NAME.spec.js`

4. Edit `source/NEW_METHOD_NAME-spec.ts`

## Add new method manually

The new method should have exact or very close implementation compared to the corresponding `Ramda` method.

### Create a method file in `source` folder

If the new method is `R.foo`, then the created file will be `./source/foo.js`

### Write the function declaration and function's logic

```
function foo(fn, input){
  return fn(input)
}
```

### Write your test cases

Create file `foo.spec.js` in folder `source`

```
import { foo } from './foo'

test('happy', () => {
  expect(
    foo(console.log)(1)
  ).not.toThrow()
})
```

### Run Jest

Running `jest --watch` is possible but as they are many tests, I am unsure that this is the best option.

I'd suggest to temporarily change the file name in `package.json`

```json
  "scripts":{
    "dev": "jest source/foo.spec.js --watch"
  }
```

and then run `yarn dev`.

### Match Ramda functionality as much as possible

It is important step as Rambda shouldn't have too many differences with Ramda.

In the hypothetical case with `R.foo`, you should check the content of current `Ramda` tests:

`https://raw.githubusercontent.com/ramda/ramda/master/test/foo.js`

Use these cases as a base for your tests, but feel free to write your own test logic.

Later, during generation of `README.md`, your new method would be tested against Ramda `R.foo` specification as assurance that the actual Ramda tests are passing with this new Rambda method.

It is very possible that there is some Ramda specifications, that our `R.foo` cannot easily satisfy. Then you can simply write new entry in `scripts/run-ramda-specs/allDifferences.json`, where you need to specify the number of failing Ramda tests and the reason for the failure.

Once the tests are ready, now you need to take care for Typescript definitions.

### Typescript definitions and method description

Edit `files/index.d.ts` and add new entry. Methods in this file are sorted alphabetically, so in case of `R.foo`  you need to add the entry between `R.flip` and `R.forEach`.

Write typings and specifications:

```text
/*

Method: foo

Explanation: It returns the result of `fn(input)`.

Example:

```
const fn = x => x + 1
const input = 1

const result = R.foo(fn, input)
// => 2
```

Categories: Function

Notes:

*/
// @SINGLE_MARKER
export function foo<T, U>(fn: (x: T) => U, input: T): U;
```

Note the consistency of `fn` and `input` throughout the example, the actual method(`source/foo.js`), the explanations and the TypeScript definition.

### Currying

Any method, which takes more than one argument, should be curried.

We can use the standard currying used throughout `Rambda`.
```
export function foo(x, y){
  if(arguments.length === 1) return _y => foo(x, _y)

  return x(y)
}
```

If `R.foo` accept more than two arguments, then you should use `R.curry`.

```
import {curry} from './curry'

function fooFn(x,y){
  return x(y)
}
export const foo = curry(fooFn)
```
