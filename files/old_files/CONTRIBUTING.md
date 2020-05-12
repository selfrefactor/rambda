# Contribution guidelines

If you want to add another `Ramda` method to the API, please feel free to submit a `PR` .

The only requirement is the new method to have exact or very close implementation compared to the corresponding `Ramda` method.

I give you example steps of the `PR` process:

> Create a method file in `src` folder

If the new method is `R.endsWith`, then the created file will be `./src/endsWith.js`

> Write the function declaration and function's logic

```
function endsWith(x, arrOrStr){
  return arrOrStr.endsWith(x)
}
```

> Any method, which takes more than one argument, should be curried.

We can use the standard curring used throughout `Rambda`.
```
export function endsWith(x, arrOrStr){
  if(arguments.length === 1){
    return arrOrStrHolder => endsWith(x, arrOrStrHolder)
  }

  return arrOrStr.endsWith(x)
}
```

Or we can also use `R.curry`, but it is not as performant as the example above.

```
import {curry} from './curry'

function endsWithFn(x, arrOrStr){
  return arrOrStr.endsWith(x)
}
export const endsWith = curry(endsWithFn)
```

> Edit `rambda.js` file

Exported methods are sorted alphabetically

```
export * from './modules/either';
export * from './modules/endsWith';
export * from './modules/equals';
```

> Test that your implementation can be compiled to ES5

`yarn prepublish`

> Write your test cases

Create file `endsWith.spec.js` in folder `src`

```
import { endsWith } from 'endsWith'

test('endsWith', () => {
  expect(
    endsWith('oo')('foo')
  ).toBeTrue()
})
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
