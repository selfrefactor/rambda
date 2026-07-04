import { replace } from './replace'

test('happy', () => {
  expect(replace(/\s/g, '|')('foo bar baz')).toBe('foo|bar|baz')
  expect(replace('a', '|')('foo bar baz')).toBe('foo b|r baz')
})

test('type test', () => {
  const str = 'foo bar foo'
  const result = replace(/foo/g, 'bar')(str)
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('bar bar bar')
})
