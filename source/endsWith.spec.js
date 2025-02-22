import { endsWith as endsWithRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { endsWith } from './endsWith.js'

test('with string', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTruthy()
  expect(endsWith('baz')('foo-bar')).toBeFalsy()
})

test('use R.equals with array', () => {
  const list = [{ a: 1 }, { a: 2 }, { a: 3 }]
  expect(endsWith({ a: 3 }, list)).toBeFalsy(),
    expect(endsWith([{ a: 3 }], list)).toBeTruthy()
  expect(endsWith([{ a: 2 }, { a: 3 }], list)).toBeTruthy()
  expect(endsWith(list, list)).toBeTruthy()
  expect(endsWith([{ a: 1 }], list)).toBeFalsy()
})

export const possibleTargets = [
  Number.NaN,
  [Number.NaN],
  /foo/,
  [/foo/],
  Promise.resolve(1),
  [Promise.resolve(1)],
  Error('foo'),
  [Error('foo')],
]

export const possibleIterables = [
  [Promise.resolve(1), Promise.resolve(2)],
  [/foo/, /bar/],
  [Number.NaN],
  [Error('foo'), Error('bar')],
]

describe('brute force', () => {
  compareCombinations({
    fn: endsWith,
    fnRamda: endsWithRamda,
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
