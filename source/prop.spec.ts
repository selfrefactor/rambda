import { prop } from './prop'
import { pipe } from './pipe'

test('type test', () => {
  const result = pipe({ a: 1 }, prop('a'))
  expectTypeOf(result).toEqualTypeOf<number>()
  expect(result).toBe(1)
})
