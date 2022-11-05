import assert from 'assert'
import { clone as cloneRamda } from 'ramda'

import {
  compareCombinations,
  EXTRA_BUILD_IN_OBJECTS,
  FALSY_VALUES,
} from './_internals/testUtils.js'
import { clone } from './clone.js'
import { equals } from './equals.js'

test('with array', () => {
  const arr = [
    {
      b : 2,
      c : 'foo',
      d : [ 1, 2, 3 ],
    },
    1,
    new Date(),
    null,
  ]
  expect(clone(arr)).toEqual(arr)
})

test('with object', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
    d : [ 1, 2, 3 ],
    e : new Date(),
  }
  expect(clone(obj)).toEqual(obj)
})

test('with date', () => {
  const date = new Date(
    2014, 10, 14, 23, 59, 59, 999
  )

  const cloned = clone(date)
  assert.notStrictEqual(date, cloned)
  expect(cloned).toEqual(new Date(
    2014, 10, 14, 23, 59, 59, 999
  ))

  expect(cloned.getDay()).toBe(5)
})

test('with R.equals', () => {
  const objects = [ { a : 1 }, { b : 2 } ]

  const objectsClone = clone(objects)

  const result = [
    equals(objects, objectsClone),
    equals(objects[ 0 ], objectsClone[ 0 ]),
  ]
  expect(result).toEqual([ true, true ])
})

describe('brute force', () => {
  const possibleInputs = [ ...FALSY_VALUES, ...EXTRA_BUILD_IN_OBJECTS ]
  compareCombinations({
    fn         : clone,
    fnRamda    : cloneRamda,
    firstInput : possibleInputs,
    callback   : errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 15,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 15,
        }
      `)
    },
  })
})
