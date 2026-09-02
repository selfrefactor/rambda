import { propOr } from './propOr'

test('happy', () => {
  const obj = { foo: 'bar' }
  const result = propOr('foo', 'fallback')(obj)
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('bar')
})
