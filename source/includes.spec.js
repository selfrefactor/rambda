import { includes } from './includes.js'

test('with string as iterable', () => {
  const str = 'foo bar'

  expect(includes('bar')(str)).toBeTruthy()
  expect(includes('never')(str)).toBeFalsy()
})

test('with array as iterable', () => {
  const arr = [1, 2, 3]

  expect(includes(2)(arr)).toBeTruthy()
  expect(includes(4)( arr)).toBeFalsy()
})

test('with list of objects as iterable', () => {
  const arr = [{ a: 1 }, { b: 2 }, { c: 3 }]

  expect(includes({ c: 3 })(arr)).toBeTruthy()
})

test('with NaN', () => {
  const result = includes(Number.NaN)([Number.NaN])
  expect(result).toBeTruthy()
})

test('with wrong input that does not throw', () => {
  const result = includes(1)(/foo/g)
  expect(result).toBeFalsy()
})