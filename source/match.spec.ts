import { match } from './match'

test('happy', () => {
  expect(match(/a./g)('foo bar baz')).toEqual(['ar', 'az'])
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a')('foo')).toEqual([])
})

test('type test', () => {
  const str = 'foo bar'
  const result = match(/foo/)(str)
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toContain('foo')
})
