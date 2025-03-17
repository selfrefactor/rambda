import { merge, mergeTypes, pipe } from 'rambda'

it('R.merge', () => {
  const result = pipe({ foo: 1 }, merge({ bar: 2 }), mergeTypes)
  result.foo // $ExpectType number
  result.bar // $ExpectType number
})
