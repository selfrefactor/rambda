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

Add explanation to missing Ramda methods

Add R.mapToList which takes object and returns a list

R.renamePropsWith

More usage of $ExpectError

Add marker/category for Rambdax methods that doesn't belong to Rambda

search for TODO

use .toThrowErrorMatchingInlineSnapshot

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
