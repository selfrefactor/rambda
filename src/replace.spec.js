import { replace } from './replace'

test('', () => {
  expect(replace('foo', 'yes', 'foo bar baz')).toEqual(
    'yes bar baz'
  )

  expect(replace(/\s/g)('|')('foo bar baz')).toEqual('foo|bar|baz')
  expect(replace(/\s/g)('|', 'foo bar baz')).toEqual('foo|bar|baz')
  expect(replace(/\s/g, '|')('foo bar baz')).toEqual('foo|bar|baz')
})
