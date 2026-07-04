import { head } from './head'

test('head', () => {
  expect(head(['fi', 'fo', 'fum'])).toBe('fi')
  expect(head([])).toBeUndefined()
  expect(head('foo')).toBe('f')
  expect(head('')).toBe('')
})

test('type test', () => {
  expectTypeOf(head('foo')).toEqualTypeOf<string>()
  expectTypeOf(head('')).toEqualTypeOf<string>()
  expectTypeOf(head([1, 2, 3])).toEqualTypeOf<number>()
  expectTypeOf(head([])).toEqualTypeOf<never>()
  expectTypeOf(head([1, 'foo', 3, 'bar'])).toEqualTypeOf<string | number>()
  expect(head(['fi', 'fo', 'fum'])).toBe('fi')
})
