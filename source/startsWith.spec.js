import { startsWith as startsWithRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { possibleIterables, possibleTargets } from './endsWith.spec.js'
import { startsWith } from './startsWith.js'

test('with string', () => {
  expect(startsWith('foo', 'foo-bar')).toBeTruthy()
  expect(startsWith('baz')('foo-bar')).toBeFalsy()
})

test('use R.equals with array', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 3 }]
  expect(startsWith({ a: 1 }, list)).toBeFalsy()
  expect(startsWith([{ a: 1 }], list)).toBeTruthy()
  expect(startsWith([{ a: 1 }, { a: 2 }], list)).toBeTruthy()
  expect(startsWith(list, list)).toBeTruthy()
  expect(startsWith([{ a: 2 }], list)).toBeFalsy()
})

describe('brute force', () => {
  compareCombinations({
    fn: startsWith,
    fnRamda: startsWithRamda,
    firstInput: possibleTargets,
    secondInput: possibleIterables,
    callback: errorsCounters => {
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
