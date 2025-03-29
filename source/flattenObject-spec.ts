import { flattenObject, pipe } from 'rambda'

it('R.flattenObject', () => {
  const result = pipe({ a: { b: 1, c: 2 } }, flattenObject)
  result['a.b'] // $ExpectType number
  result['a.c'] // $ExpectType number
  // @ts-expect-error
  result['a.foo']
})
