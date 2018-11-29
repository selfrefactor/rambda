import { split } from './split'

test('split', () => {
  expect(split('|')('foo|bar|baz')).toStrictEqual([ 'foo', 'bar', 'baz' ])

  expect(split('.', 'a.b.c.xyz.d')).toStrictEqual([
    'a',
    'b',
    'c',
    'xyz',
    'd',
  ])
})
