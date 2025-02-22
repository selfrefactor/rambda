import { excludes } from './excludes.js'

test('excludes with string', () => {
  const str = 'more is less'

  expect(excludes('less')(str)).toBeFalsy()
  expect(excludes('never', str)).toBeTruthy()
})

test('excludes with array', () => {
  const arr = [1, 2, 3]

  expect(excludes(2)(arr)).toBeFalsy()
  expect(excludes(4, arr)).toBeTruthy()
})
