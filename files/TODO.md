## Uncommited changelog

R.produceAsync returns promise even if all rules are synchronous.

## Blacklist methods

Methods such as compose, curryN doesn't need anything more than description and example. This should keep size of docs smaller.

## isValid with functions

only arrow function works

```
ok(repos)(fn)  
  // ok(repos)(x => {
  //     console.log({x})
  //   })
```

also not possible is array of function schema

```
ok(repos)([x => {
      console.log({x})
    }])
```

## Export types

Also check other questions from the last issue.

## Readme limit

Exit build process if README.md is larger than 500kB. Also check what difference make if separator is removed.

## typings of last and head

```
const parse = pipe(split('.'), head) is wrong
but
const parse = pipe(split('.'), last) is correct
```

## Wrong use of releases

Use github CLI as it offers API to make a release

## Other

strip `readonly` from docs typings

add function to typings

create pipeline for `rambda-docs` typings file

---

Methods to add:  

- uniqBy
- propSatisfies
- pickBy
- pathSatisfies
- gte
- mapObjIndexed(types from @types/ramda)

https://github.com/smartprocure/futil-js#differentlast
https://github.com/smartprocure/futil-js#whentruthy
findApply
compactMap
compactJoin
flattenObject
simpleDiff
highlight
on
off
includeLens?
---

## Can postpone

- R.mapKeys (name inspiration from https://github.com/AlexGalays/spacelift#objectmapvalues)

fetch contributors github's avatars

Add explanation to missing Ramda methods

Add R.mapToList which takes object and returns a list

R.renamePropsWith

Use new `Promise.allSettled`

More usage of $ExpectError

Add marker/category for Rambdax methods that doesn't belong to Rambda

repl needs `const result =` and not all methods are correct

search for TODO

use .toThrowErrorMatchingInlineSnapshot

R.map sanity check is different than R.filter - fixable with global change of wrong inputs

## Holder

```
test('happy', () => {
  class Foo{
    constructor(){
      this.obj = {}
    }
    foo(x, prop){
      this.obj[prop] = x
    }
    bar(){
      const hash = {a: 1, b:2}
      forEach(this.foo, hash)
      console.log(this.obj)
    }
  }
  const foo = new Foo()
  foo.bar()
})
```

https://github.com/DefinitelyTyped/DefinitelyTyped/commit/182dac81b18d1172f8783310a4e40301f3888e69#diff-4f74803fa83a81e47cb17a7d8a4e46a7e451f4d9e5ce2f1bd7a70a72d91f4bc1
