# Contribution guidelines

## Add new method

If you want to add another `Ramda` method to the API, please feel free to submit a `PR` .

The only requirement is the new method to have exact or very close implementation compared to the corresponding `Ramda` method.

I give you example steps of the `PR` process:

### Create a method file in `source` folder

If the new method is `R.foo`, then the created file will be `./source/foo.js`

### Write the function declaration and function's logic

```
function foo(x, y){
  return x(y)
}
```

### Write very basic test case

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

Temporary change the file name in `package.json` 

```json
  "scripts":{
    "dev": "jest source/foo.spec.js --watch"
  }
```

and then you can run `yarn dev`.

### Match Ramda functionality as much as possible

It is important step as Rambda shouldn't have too many differences with Ramda.

In the hypothetical case with `R.foo`, we can go to read the content of Ramda specifications:

`https://raw.githubusercontent.com/ramda/ramda/master/test/foo.js`

Use these cases as a base for your tests, but feel free to write your own test logic.

Later, during generation of `README.md`, your new method would be tested against Ramda `R.foo` specification as assurance that the actual Ramda tests are passing with this new Rambda method.

It is very possible that there is some Ramda specifications, that our `R.foo` cannot satisfy without trouble. Then you can simply write new entry in `scripts/run-ramda-specs/allDifferences.json`, where you need to specify the number of failing Ramda tests and the reason for the failure.

Once the tests are ready, now we need to take care for Typescript definitions.

### Typescript definitions and method description

### Currying

 Any method, which takes more than one argument, should be curried.

We can use the standard curring used throughout `Rambda`.
```
export function foo(x, y){
  if(arguments.length === 1)return _y => foo(x, _y)

  return x(y)
}
```

Or we can also use `R.curry`, but it is not as performant as the example above.

```
import {curry} from './curry'

function fooFn(x,y){
  return x(y)
}
export const foo = curry(fooFn)
```

> Edit `rambda.js` file

Exported methods are sorted alphabetically

```
export * from './modules/filter';
export * from './modules/foo';
```

> Run `yarn test` to validate your tests

> Edit `./files/README.md` to add documentation for this method

Note that your documentation should match the pattern visible across `./files/README.md`
Do not include `Source` location as that will trigger generation of REPL link and the REPL has separate update process.

> Run `yarn readme` to generate the actual documentation

> Add a benchmark(very optional)

Create file `endsWith.js` in folder `benchmarks`

```
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const str = 'foo'

const endsWith = [
  {
    label : 'Rambda',
    fn    : () => {
      const result = R.endsWith('oo',str)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const result = Ramda.endsWith('oo',str)
    },
  },

]
module.exports = endsWith
```

> Submit PR

Expect response within 2 days.

---

Ramda docs + repl

index.d.ts

typings + typings test

edit `rambda.js` !important

yarn out

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/ramda/index.d.ts