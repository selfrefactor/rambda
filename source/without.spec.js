import { without } from './without'
import {without as ramdaWithout} from 'ramda'

test('should return a new list without values in the first argument', () => {
  const itemsToOmit = [ 'A', 'B', 'C' ]
  const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

  expect(without(itemsToOmit, collection)).toEqual([ 'D', 'E', 'F' ])
  expect(without(itemsToOmit)(collection)).toEqual([ 'D', 'E', 'F' ])
})

test.only('with list of objects', () => {
  const itemsToOmit = [ {a: 1}, {c: 3} ]
  const collection = [{a: 1}, {b: 2}, {c: 3}, {d: 4} ]
  const expected = [ {b: 2}, {d: 4} ]

  expect(without(itemsToOmit, collection)).toEqual(expected)
  expect(ramdaWithout(itemsToOmit, collection)).toEqual(expected)
})

test('ramda bug', () => {
  expect(
    without("0:1", ["0", "0:1"])
  ).toEqual(['0:1'])
})

test('ramda test', () => {
  expect(without([ 1, 2 ])([ 1, 2, 1, 3, 4 ])).toEqual([ 3, 4 ])
})
