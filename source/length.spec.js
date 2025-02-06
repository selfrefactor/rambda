import { length as lengthRamda } from 'ramda'

import { length } from './length.js'

test('happy', () => {
  expect(length('foo')).toBe(3)
  expect(length([1, 2, 3])).toBe(3)
  expect(length([])).toBe(0)
})

test('with empty string', () => {
  expect(length('')).toBe(0)
})

test('with bad input returns NaN', () => {
  expect(length(0)).toBeNaN()
  expect(length({})).toBeNaN()
  expect(length(null)).toBeNaN()
  expect(length(undefined)).toBeNaN()
})

test('with length as property', () => {
  const input1 = { length: '123' }
  const input2 = { length: null }
  const input3 = { length: '' }

  expect(length(input1)).toBeNaN()
  expect(lengthRamda(input1)).toBeNaN()
  expect(length(input2)).toBeNaN()
  expect(lengthRamda(input2)).toBeNaN()
  expect(length(input3)).toBeNaN()
  expect(lengthRamda(input3)).toBeNaN()
})
