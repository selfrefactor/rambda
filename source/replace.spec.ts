import { replace } from './replace'

test('happy', () => {
  const str = 'foo bar foo'
  const result = replace(/foo/g, 'bar')(str)
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('bar bar bar')
})
