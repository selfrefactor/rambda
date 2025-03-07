import { getPropertyOrDefault } from './getPropertyOrDefault.js'

test('getPropertyOrDefault (result)', () => {
  const obj = { a: 1 }
  expect(getPropertyOrDefault('default', 'a')(obj)).toBe(1)
  expect(getPropertyOrDefault('default', 'notExist')(obj)).toBe('default')
  expect(getPropertyOrDefault('default', 'notExist')(null)).toBe('default')
})