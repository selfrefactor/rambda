import { startsWith as startsWithRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { possibleIterables, possibleTargets } from './endsWith.spec.js'
import { startsWith } from './startsWith.js'

test('with string', () => {
  expect(startsWith('foo', 'foo-bar')).toBeTrue()
  expect(startsWith('baz')('foo-bar')).toBeFalse()
})

test('use R.equals with array', () => {
  const list = [ { a : 1 }, { a : 2 }, { a : 3 } ]
  expect(startsWith({ a : 1 }, list)).toBeFalse()
  expect(startsWith([ { a : 1 } ], list)).toBeTrue()
  expect(startsWith([ { a : 1 }, { a : 2 } ], list)).toBeTrue()
  expect(startsWith(list, list)).toBeTrue()
  expect(startsWith([ { a : 2 } ], list)).toBeFalse()
})

describe('brute force', () => {
  compareCombinations({
    fn          : startsWith,
    fnRamda     : startsWithRamda,
    firstInput  : possibleTargets,
    secondInput : possibleIterables,
    callback    : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 32,
        }
      `)
    },
  })
})
