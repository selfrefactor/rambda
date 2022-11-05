import { objOf as objOfRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { objOf } from './objOf.js'

test('happy', () => {
  expect(objOf('foo', 42)).toEqual({ foo : 42 })
})

test('with bad inputs', () => {
  expect(objOf(null, undefined)).toEqual({ null : undefined })
})

test('curried', () => {
  expect(objOf('foo')(42)).toEqual({ foo : 42 })
})

describe('brute force', () => {
  const possibleInputs = [ 0, 1, null, undefined, [], {} ]

  compareCombinations({
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
          "TOTAL_TESTS": 36,
        }
      `)
    },
    fn      : objOf,
    fnRamda : objOfRamda,
  })
})
