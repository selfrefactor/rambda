import { excludes } from './excludes.js'

test('excludes with string', () => {
  const str = 'more is less'

  expect(excludes(str)('less')).toBeFalsy()
  expect(excludes(str)('never')).toBeTruthy()
})

test('excludes with array', () => {
  const arr = [1, 2, 3]

  expect(excludes(arr)(2)).toBeFalsy()
  expect(excludes(arr)(4)).toBeTruthy()
})
