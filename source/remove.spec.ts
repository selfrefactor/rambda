import { remove } from './remove'

test('happy', () => {
  const inputs = [/foo/, /not\shere/, /also/, 'bar']
  const text = 'foo bar baz foo'
  const result = remove(inputs)(text)
  expect(result).toEqual('baz foo')
})

test('with single rule', () => {
  const inputs = /foo/g
  const text = 'foo bar baz foo'
  const result = remove(inputs)(text)
  expect(result).toEqual(' bar baz ')
})

test('type test', () => {
  const result = remove([/foo/])('foo bar')
  expectTypeOf(result).toEqualTypeOf<string>()
  expect(result).toBe('bar')
})
