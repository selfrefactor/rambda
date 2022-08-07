import { without as withoutRamda } from 'ramda'

import { without } from './without.js'

test('should return a new list without values in the first argument', () => {
  const itemsToOmit = [ 'A', 'B', 'C' ]
  const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

  expect(without(itemsToOmit, collection)).toEqual([ 'D', 'E', 'F' ])
  expect(without(itemsToOmit)(collection)).toEqual([ 'D', 'E', 'F' ])
})

test('with list of objects', () => {
  const itemsToOmit = [ { a : 1 }, { c : 3 } ]
  const collection = [ { a : 1 }, { b : 2 }, { c : 3 }, { d : 4 } ]
  const expected = [ { b : 2 }, { d : 4 } ]

  expect(without(itemsToOmit, collection)).toEqual(expected)
  expect(withoutRamda(itemsToOmit, collection)).toEqual(expected)
})

test('ramda accepts string as target input while rambda throws', () => {
  expect(withoutRamda('0:1', [ '0', '0:1' ])).toEqual([])
  expect(() =>
    without('0:1', [ '0', '0:1' ])).toThrowErrorMatchingInlineSnapshot('"Cannot read property \'indexOf\' of 0:1"')
  expect(without([ '0:1' ], [ '0', '0:1' ])).toEqual([ '0' ])
})

test('ramda test', () => {
  expect(without([ 1, 2 ])([ 1, 2, 1, 3, 4 ])).toEqual([ 3, 4 ])
})
