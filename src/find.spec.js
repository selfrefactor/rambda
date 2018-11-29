import { find } from './find'
import { propEq } from './propEq'

test('', () => {
  expect(
    find(propEq('a', 2), [ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual({ a : 2 })
})

test('with curry', () => {
  expect(
    find(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])
  ).toEqual(undefined)
})
