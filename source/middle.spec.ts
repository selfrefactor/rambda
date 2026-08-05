import { middle } from './middle'


test('happy', () => {
  expectTypeOf(middle('foo')).toEqualTypeOf<string>()
  expectTypeOf(middle('')).toEqualTypeOf<string>()
  expectTypeOf(middle(['foo', 'bar', 1, 2, 3])).toEqualTypeOf<(string | number)[]>()
  expect(middle('abc')).toBe('b')
})
