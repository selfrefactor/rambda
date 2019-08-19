import { includes } from './includes'
import R from 'ramda'

test('includes with string', () => {
  const str = 'more is less'

  expect(includes('less')(str)).toBeTruthy()
  expect(R.includes('less')(str)).toBeTruthy()
  expect(includes('never', str)).toBeFalsy()
  expect(R.includes('never', str)).toBeFalsy()
})

test('includes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(includes(2)(arr)).toBeTruthy()
  expect(R.includes(2)(arr)).toBeTruthy()

  expect(includes(4, arr)).toBeFalsy()
  expect(R.includes(4, arr)).toBeFalsy()
})

test('return false if input is falsy', () => {
  expect(includes(2, null)).toBeFalsy()
  expect(() => R.includes(2, null)).toThrow()
  expect(includes(4, undefined)).toBeFalsy()
  expect(() => R.includes(4, undefined)).toThrow()
})
