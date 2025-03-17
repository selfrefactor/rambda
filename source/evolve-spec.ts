import { add, evolve, pipe } from 'rambda'

it('R.evolve', () => {
  const input = {
    foo: 2,
    nested: {
      a: 1,
      bar: 3,
    },
  }
  const rules = {
    foo: add(1),
    nested: {
      a: add(-1),
      bar: add(1),
    },
  }
  const result = pipe(input, evolve(rules))
  result.nested.a // $ExpectType number
  result.nested.bar // $ExpectType number
  result.foo // $ExpectType number
})
