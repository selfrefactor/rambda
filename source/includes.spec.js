import { includes as includesRamda } from 'ramda'

import { includes } from './includes.js'

test('with string as iterable', () => {
  const str = 'foo bar'

  expect(includes('bar')(str)).toBeTruthy()
  expect(includesRamda('bar')(str)).toBeTruthy()
  expect(includes('never', str)).toBeFalsy()
  expect(includesRamda('never', str)).toBeFalsy()
})

test('with array as iterable', () => {
  const arr = [1, 2, 3]

  expect(includes(2)(arr)).toBeTruthy()
  expect(includesRamda(2)(arr)).toBeTruthy()

  expect(includes(4, arr)).toBeFalsy()
  expect(includesRamda(4, arr)).toBeFalsy()
})

test('with list of objects as iterable', () => {
  const arr = [{ a: 1 }, { b: 2 }, { c: 3 }]

  expect(includes({ c: 3 }, arr)).toBeTruthy()
  expect(includesRamda({ c: 3 }, arr)).toBeTruthy()
})

test('with NaN', () => {
  const result = includes(Number.NaN, [Number.NaN])
  const ramdaResult = includesRamda(Number.NaN, [Number.NaN])
  expect(result).toBeTruthy()
  expect(ramdaResult).toBeTruthy()
})

test('with wrong input that does not throw', () => {
  const result = includes(1, /foo/g)
  const ramdaResult = includesRamda(1, /foo/g)
  expect(result).toBeFalsy()
  expect(ramdaResult).toBeFalsy()
})

test('throws on wrong input - match ramda behaviour', () => {
  expect(() => includes(2, null)).toThrowWithMessage(
    TypeError,
    "Cannot read property 'indexOf' of null",
  )
  expect(() => includesRamda(2, null)).toThrowWithMessage(
    TypeError,
    "Cannot read properties of null (reading 'indexOf')",
  )
  expect(() => includes(2, undefined)).toThrowWithMessage(
    TypeError,
    "Cannot read property 'indexOf' of undefined",
  )
  expect(() => includesRamda(2, undefined)).toThrowWithMessage(
    TypeError,
    "Cannot read properties of undefined (reading 'indexOf')",
  )
})
