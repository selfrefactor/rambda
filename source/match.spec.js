import { match } from './match.js'

test('happy', () => {
  expect(match(/a./g)('foo bar baz')).toEqual(['ar', 'az'])
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a')('foo')).toEqual([])
})
