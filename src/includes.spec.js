import R from 'ramda'

import { includes } from './includes'

test('includes with string', () => {
  const str = 'more is less'

  expect(includes('less')(str)).toBeTrue()
  expect(R.includes('less')(str)).toBeTrue()
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

test('return false if input is falsy', () => {
  expect(includes(2, null)).toBeFalse()
  expect(() => R.includes(2, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of null')
  expect(includes(4, undefined)).toBeFalse()
  expect(() => R.includes(4, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of undefined')
})
