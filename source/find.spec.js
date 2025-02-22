import { find } from './find.js'
import { propEq } from './propEq.js'

const list = [{ a: 1 }, { a: 2 }, { a: 3 }]

test('happy', () => {
  const fn = propEq(2, 'a')
  expect(find(fn, list)).toEqual({ a: 2 })
})

test('with curry', () => {
  const fn = propEq(4, 'a')
  expect(find(fn)(list)).toBeUndefined()
})

test('with empty list', () => {
  expect(find(() => true, [])).toBeUndefined()
})
