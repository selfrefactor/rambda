import { equals } from './equals'
import { find } from './find'
import { propEq } from './propEq'

test('happy', () => {
  expect(find(propEq('a', 2), [ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual({ a : 2 })
})

test('with curry', () => {
  expect(find(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(undefined)
})

test('with empty list', () => {
  expect(find(propEq('a', 4))([])).toEqual(undefined)
})

test('without native Array.prototype.find', () => {
  const list = [ 1, 2, 3 ]
  list.find = undefined

  expect(find(equals(2), list)).toEqual(2)
})
