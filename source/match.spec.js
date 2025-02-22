import { equals } from './equals.js'
import { match } from './match.js'

test('happy', () => {
  expect(match(/a./g)('foo bar baz')).toEqual(['ar', 'az'])
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a', 'foo')).toEqual([])
  expect(equals(match('o', 'foo'), ['o'])).toBeTruthy()
})

test('throwing', () => {
  expect(() => {
    match(/a./g, null)
  }).toThrowError(
    '"Cannot read properties of null (reading \'match\')"',
  )
})
