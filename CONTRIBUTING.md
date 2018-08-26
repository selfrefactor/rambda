# Contribution guidelines

If you want to add another `Ramda` method to the API, please feel free to submit a `PR` .

The only requirement is the new method to have exact or very close implementation compared to the corresponding `Ramda` method.

I give you example steps of the `PR` process.

> Create a method file in `modules` folder.

If the new method is `R.endsWith`, then the created file will be `./modules/endsWith.js`

> Write the function declaration and function's logic.

```
function endsWith(x, arrOrStr){
  return arrOrStr.endsWith(x)
}
```

> Any method, which takes more than one argument, should be curried.

We can use the standard curring used throughout `Rambda`.
```
function endsWith(x, arrOrStr){
  if(arrOrStr === undefined){
    return arrOrStrHolder => endsWith(x, arrOrStrHolder)
  }
  return arrOrStr.endsWith(x)
}
module.exports = endsWith
```

Or we can also use `R.curry`, but it is not as performant as the example above.

```
const curry = require('./curry')
function endsWith(x, arrOrStr){
  if(arrOrStr === undefined){
    return holder => endsWith(x, arrOrStr)
  }
  return arrOrStr.endsWith(x)
}
module.exports = curry(endsWith)
```

> Edit `rambda.js` file

Exported methods are sorted alphabetically

```
export { default as either } from './modules/either';
export { default as endsWith } from './modules/endsWith';
export { default as equals } from './modules/equals';
```

> Test that your implementation can be compiled to ES5

`yarn prepublish`

> Write your test cases

Create file `endsWith.js` in folder `__tests__`

```
const R = require('../rambda')

test('endsWith', () => {
  expect(R.endsWith('oo')('foo')).toBeTruthy()
})
```

> Run `yarn test` to validate your tests

> Add a benchmark

Create file `endsWith.js` in folder `benchmarks`

```
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite
.add('Rambda.endsWith', () => {
  R.endsWith(['b'], ['a', 'b', 'c'])
})
.add('Ramda.endsWith', () => {
  Ramda.endsWith(['b'], ['a', 'b', 'c'])
})

module.exports = suite
```

> Test your benchmark

`yarn build-main`
`node benchmarks/index.js endsWith`

> Edit `./files/README.md` to add documentation for the method

Note that your documentation should match the pattern visible across `./files/README.md`

> Lint your files

`yarn lint modules/endsWith.js`

`yarn lint __tests__/endsWith.js`

> Submit PR

Expect response within 2 days.
