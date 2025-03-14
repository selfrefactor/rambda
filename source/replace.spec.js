import { replace } from './replace.js'

test('happy', () => {
  expect(replace(/\s/g, '|')('foo bar baz')).toBe('foo|bar|baz')
  expect(replace('a', '|')('foo bar baz')).toBe('foo b|r baz')
})

