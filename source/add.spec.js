import { add as addRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { add } from './add.js'

test('with number', () => {
  expect(add(2, 3)).toBe(5)
  expect(add(7)(10)).toBe(17)
})

test('string is bad input', () => {
  expect(add('foo', 'bar')).toBeNaN()
})

test('ramda specs', () => {
  expect(add('1', '2')).toBe(3)
  expect(add(1, '2')).toBe(3)
  expect(add(true, false)).toBe(1)
  expect(add(null, null)).toBe(0)
  expect(add(undefined, undefined)).toBeNaN()
  expect(add(new Date(1), new Date(2))).toBe(3)
})

const possibleInputs = [
  /foo/,
  'foo',
  true,
  3,
  NaN,
  4,
  [],
  Promise.resolve(1),
]

describe('brute force', () => {
  compareCombinations({
    fn          : add,
    fnRamda     : addRamda,
    firstInput  : possibleInputs,
    secondInput : possibleInputs,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 64,
        }
      `)
    },
  })
})
