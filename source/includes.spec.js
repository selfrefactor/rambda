import R from 'ramda'

import { includes } from './includes'

test('includes with string', () => {
  const str = 'foo bar'

  expect(includes('bar')(str)).toBeTrue()
  expect(R.includes('bar')(str)).toBeTrue()
  expect(includes('never', str)).toBeFalse()
  expect(R.includes('never', str)).toBeFalse()
})

test('includes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(includes(2)(arr)).toBeTrue()
  expect(R.includes(2)(arr)).toBeTrue()

  expect(includes(4, arr)).toBeFalse()
  expect(R.includes(4, arr)).toBeFalse()
})

test('with wrong input that does not throw', () => {
  const result = includes(1, /foo/g)
  const ramdaResult = R.includes(1, /foo/g)
  expect(result).toBeFalse()
  expect(ramdaResult).toBeFalse()
})

test('throws on wrong input - match ramda behaviour', () => {
  expect(() => includes(2, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of null')
  expect(() => R.includes(2, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of null')
  expect(() => includes(2, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of undefined')
  expect(() => R.includes(2, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of undefined')
})
