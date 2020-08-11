import { removeIndex } from './removeIndex.js'

const list = [ 1, 2, 3, 4 ]

test('first or before first index', () => {
  expect(removeIndex(list, 0)).toEqual([ 2, 3, 4 ])
  expect(removeIndex(list, -2)).toEqual([ 2, 3, 4 ])
})

test('last or after last index', () => {
  expect(removeIndex(list, 4)).toEqual([ 1, 2, 3 ])
  expect(removeIndex(list, 10)).toEqual([ 1, 2, 3 ])
})

test('middle index', () => {
  expect(removeIndex(list, 1)).toEqual([ 1, 3, 4 ])
  expect(removeIndex(list, 2)).toEqual([ 1, 2, 4 ])
})
