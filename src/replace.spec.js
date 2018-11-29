import { replace } from './replace'

test('', () => {
  expect(replace('foo', 'yes', 'foo bar baz')).toStrictEqual(
    'yes bar baz'
  )

  expect(replace(/\s/g)('|')('foo bar baz')).toStrictEqual('foo|bar|baz')
  expect(replace(/\s/g)('|', 'foo bar baz')).toStrictEqual('foo|bar|baz')
  expect(replace(/\s/g, '|')('foo bar baz')).toStrictEqual('foo|bar|baz')
})
