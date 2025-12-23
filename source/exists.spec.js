import { exists } from './exists.js'
import { propEq } from './propEq.js'

const list = [{ a: 1 }, { a: 2 }, { a: 3 }]

test('happy', () => {
  const fn = propEq(2, 'a')
  expect(exists(fn)(list)).toBe(true)
})

test('nothing is found', () => {
  const fn = propEq(4, 'a')
  expect(exists(fn)(list)).toBe(false)
})
