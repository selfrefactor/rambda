import { remove } from './remove'

test('happy', () => {
  const result = remove([/f/, 'o'])('foo bar')
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('o bar')
})

test('with single rule', () => {
  const inputs = /foo/g
  const text = 'foo bar baz foo'
  const result = remove(inputs)(text)
  expect(result).toEqual(' bar baz ')
})
