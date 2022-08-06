import { findIndex } from './findIndex.js'
import { propEq } from './propEq.js'

const list = [ { a : 1 }, { a : 2 }, { a : 3 } ]

test('happy', () => {
  expect(findIndex(propEq('a', 2), list)).toBe(1)

  expect(findIndex(propEq('a', 1))(list)).toBe(0)

  expect(findIndex(propEq('a', 4))(list)).toEqual(-1)
})
