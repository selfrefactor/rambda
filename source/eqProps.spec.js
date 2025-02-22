import { eqProps as eqPropsRamda } from 'ramda'

import { compareCombinations } from './_internals/testUtils.js'
import { eqProps } from './eqProps.js'

const obj1 = {
  a: 1,
  b: 2,
}
const obj2 = {
  a: 1,
  b: 3,
}

test('props are equal', () => {
  const result = eqProps('a', obj1, obj2)
  expect(result).toBeTruthy()
})

test('props are not equal', () => {
  const result = eqProps('b', obj1, obj2)
  expect(result).toBeFalsy()
})

test('prop does not exist', () => {
  const result = eqProps('c', obj1, obj2)
  expect(result).toBeTruthy()
})

test('can handle null or undefined object', () => {
  expect(eqProps('value', { value: 0 }, null)).toBeFalsy()
  expect(eqProps('value', { value: 0 }, undefined)).toBeFalsy()
  expect(eqProps('value', null, { value: 0 })).toBeFalsy()
  expect(eqProps('value', undefined, { value: 0 })).toBeFalsy()
  expect(eqProps('value', undefined, { value: undefined })).toBeTruthy()
  expect(eqProps('value', null, { value: undefined })).toBeTruthy()
  expect(eqProps('value', { value: undefined }, undefined)).toBeTruthy()
  expect(eqProps('value', { value: undefined }, null)).toBeTruthy()
  expect(eqProps('value', {}, null)).toBeTruthy()
  expect(eqProps('value', {}, undefined)).toBeTruthy()
  expect(eqProps('value', null, {})).toBeTruthy()
  expect(eqProps('value', undefined, {})).toBeTruthy()
})

const possibleProps = ['a', 'a.b', null, false, 0, 1, {}, []]

const possibleObjects = [
  { a: 1 },
  {
    a: 1,
    b: 2,
  },
  {},
  [],
  null,
  {
    a: { b: 1 },
    c: 2,
  },
  {
    a: { b: 1 },
    c: 3,
  },
  { a: { b: 2 } },
]

describe('brute force', () => {
  let totalTestsCounter = 0

  compareCombinations({
    firstInput: possibleProps,
    setCounter: () => totalTestsCounter++,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 120,
          "TOTAL_TESTS": 512,
        }
      `)
    },
    secondInput: possibleObjects,
    thirdInput: possibleObjects,
    fn: eqProps,
    fnRamda: eqPropsRamda,
  })
})
