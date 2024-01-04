import { innerJoin as innerJoinRamda } from 'ramda'

import { innerJoin } from './innerJoin.js'

const a = {
  id   : 1,
  name : 'a',
}
const b = {
  id   : 2,
  name : 'b',
}
const c = {
  id   : 3,
  name : 'c',
}
const f = innerJoin((r, id) => r.id === id)

test('only returns elements from the first list', () => {
  expect(f([ a, b, c ], [])).toEqual([])
  expect(f([ a, b, c ], [ 1 ])).toEqual([ a ])
  expect(f([ a, b, c ], [ 1, 2 ])).toEqual([ a, b ])
  expect(f([ a, b, c ], [ 1, 2, 3 ])).toEqual([ a, b, c ])
  expect(f([ a, b, c ], [ 1, 2, 3, 4 ])).toEqual([ a, b, c ])
})

test('does not remove duplicates', () => {
  expect(f([ a, a, a ], [ 1, 2, 3 ])).toEqual([ a, a, a ])
  expect(f([ a, b, c ], [ 1, 1, 1 ])).toEqual([ a ])
})
