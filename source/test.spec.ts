import { test as testMethod } from './test'

test('happy', () => {
  expect(testMethod(/^x/)('xyz')).toBeTruthy()
  expect(testMethod(/^y/)('xyz')).toBeFalsy()
})

test('type test', () => {
  const input = 'foo   '
  const regex = /foo/
  const result = testMethod(regex)(input)

  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(true)
})
