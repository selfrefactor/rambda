import { eqProps as eqPropsRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils'
import { eqProps } from './eqProps'

const obj1 = {
  a : 1,
  b : 2,
}
const obj2 = {
  a : 1,
  b : 3,
}

test('props are equal', () => {
  const result = eqProps(
    'a', obj1, obj2
  )
  expect(result).toBeTrue()
})

test('props are not equal', () => {
  const result = eqProps(
    'b', obj1, obj2
  )
  expect(result).toBeFalse()
})

test('prop does not exist ', () => {
  const result = eqProps(
    'c', obj1, obj2
  )
  expect(result).toBeTrue()
})

const possibleProps = [ 'a', 'a.b', null, false, 0, 1, {}, [] ]

const possibleObjects = [
  { a : 1 },
  {
    a : 1,
    b : 2,
  },
  {},
  [],
  null,
  {
    a : { b : 1 },
    c : 2,
  },
  {
    a : { b : 1 },
    c : 3,
  },
  { a : { b : 2 } },
]

describe('brute force', () => {
  let totalTestsCounter = 0

  compareCombinations({
    firstInput : possibleProps,
    setCounter : () => totalTestsCounter++,
    callback   : errorsCounters => {
      // console.log({ totalTestsCounter })

      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 120,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
        }
      `)
    },
    secondInput : possibleObjects,
    thirdInput  : possibleObjects,
    fn          : eqProps,
    fnRamda     : eqPropsRamda,
  })
})
