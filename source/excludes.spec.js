import { excludes } from './excludes'

test('excludes with string', () => {
  const str = 'more is less'

  expect(excludes('less')(str)).toBeFalse()
  expect(excludes('never', str)).toBeTrue()
})

test('excludes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(excludes(2)(arr)).toBeFalse()
  expect(excludes(4, arr)).toBeTrue()
})
