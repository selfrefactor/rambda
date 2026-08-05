import { test as testMethod } from './test'

test('happy', () => {
  const input = 'foo   '
  const regex = /foo/
  const result = testMethod(regex)(input)

  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(true)
})
