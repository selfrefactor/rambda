import { filter as filterRamda } from 'ramda'

import { T } from './T.js'
import { filter } from './filter.js'

const sampleObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [1, 2, 3, 4])).toEqual([2, 4])
  expect(
    filter(isEven, {
      a: 1,
      b: 2,
      d: 3,
    }),
  ).toEqual({ b: 2 })
})

test('predicate when input is object', () => {
  const obj = {
    a: 1,
    b: 2,
  }
  const predicate = (val, prop, inputObject) => {
    expect(inputObject).toEqual(obj)
    expect(typeof prop).toBe('string')

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({ a: 1 })
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = filter(isEven, sampleObject)
  const expectedResult = {
    b: 2,
    d: 4,
  }

  expect(result).toEqual(expectedResult)
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => filter(T, null)).toThrowError('Incorrect iterable input')
  expect(() => filter(T)(undefined)).toThrowError('Incorrect iterable input')
  expect(() => filterRamda(T, null)).toThrowError(
    "Cannot read properties of null (reading 'fantasy-land/filter')",
  )
  expect(() => filterRamda(T, undefined)).toThrowError(
    "Cannot read properties of undefined (reading 'fantasy-land/filter')",
  )
})
