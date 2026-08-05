import { match } from './match'

test('happy', () => {
  const str = 'foo bar'
  const result = match(/foo/)(str)
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toContain('foo')
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a')('foo')).toEqual([])
})
