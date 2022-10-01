import { replace } from './replace.js'

test('happy', () => {
  expect(replace(
    'foo', 'yes', 'foo bar baz'
  )).toBe('yes bar baz')
})

test('1', () => {
  expect(replace(/\s/g)('|')('foo bar baz')).toBe('foo|bar|baz')
})

test('2', () => {
  expect(replace(/\s/g)('|', 'foo bar baz')).toBe('foo|bar|baz')
})

test('3', () => {
  expect(replace(/\s/g, '|')('foo bar baz')).toBe('foo|bar|baz')
})
