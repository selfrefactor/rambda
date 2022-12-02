import { uniqBy as uniqByRamda } from 'ramda'

import { uniqBy } from './uniqBy.js'

test('happy', () => {
  expect(uniqBy(Math.abs, [ -2, -1, 0, 1, 2 ])).toEqual([ -2, -1, 0 ])
})

test('keeps elements from the left', () => {
  expect(uniqBy(Math.abs, [ -1, 2, 4, 3, 1, 3 ])).toEqual([ -1, 2, 4, 3 ])
})

test('returns an empty array for an empty array', () => {
  expect(uniqBy(Math.abs, [])).toEqual([])
})

test('uses R.uniq', () => {
  const list = [ { a : 1 }, { a : 2 }, { a : 1 } ]
  const expected = [ { a : 1 }, { a : 2 } ]
  expect(uniqBy(x => x, list)).toEqual(expected)
  expect(uniqByRamda(x => x, list)).toEqual(expected)
})
