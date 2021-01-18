import { dropWhile as dropWhileRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils'
import { dropWhile } from './dropWhile'

const list = [ 1, 2, 3, 4 ]

test('happy', () => {
  const predicate = x => x < 3
  const result = dropWhile(predicate, list)
  expect(result).toEqual([ 3, 4 ])
})

test('always true', () => {
  const predicate = () => true
  const result = dropWhileRamda(predicate, list)
  expect(result).toEqual([])
})

test('always false', () => {
  const predicate = () => 0
  const result = dropWhile(predicate)(list)
  expect(result).toEqual(list)
})

test('works with string as iterable', () => {
  const iterable = 'foobar'
  const predicate = x => x !== 'b'
  const result = dropWhile(predicate, iterable)
  expect(result).toBe('bar')
})

const possiblePredicates = [
  null,
  undefined,
  () => 0,
  () => true,
  /foo/g,
  {},
  [],
]

const possibleIterables = [
  null,
  undefined,
  [],
  {},
  1,
  '',
  'foobar',
  [ '' ],
  [ 1, 2, 3, 4, 5 ],
]

describe('brute force', () => {
  compareCombinations({
    firstInput : possiblePredicates,
    callback   : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 15,
          "ERRORS_TYPE_MISMATCH": 14,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 14,
          "SHOULD_THROW": 0,
        }
      `)
    },
    secondInput : possibleIterables,
    fn          : dropWhile,
    fnRamda     : dropWhileRamda,
  })
})
