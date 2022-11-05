import { count as countRamda } from 'ramda'

import { count } from './count.js'

const predicate = x => x.a !== undefined

test('with empty list', () => {
  expect(count(predicate, [])).toBe(0)
})

test('happy', () => {
  const list = [ 1, 2, { a : 1 }, 3, { a : 1 } ]

  expect(count(predicate)(list)).toBe(2)
})

test('rambdax/issues/86', () => {
  const arr = [ true, false, true, false ]
  expect(count(Boolean, arr)).toBe(countRamda(Boolean, arr))
})
