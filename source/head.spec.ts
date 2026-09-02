import { head } from './head'

test('happy', () => {
  expectTypeOf(head('foo')).toEqualTypeOf<string>()
  expectTypeOf(head('')).toEqualTypeOf<string>()
  expectTypeOf(head([1, 2, 3])).toEqualTypeOf<number>()
  expectTypeOf(head([])).toEqualTypeOf<never>()
  expect(head(['fi', 'fo', 'fum'])).toBe('fi')
	
  expectTypeOf(head([1, 'foo', 3, 'bar'])).toEqualTypeOf<string | number>()
})
