import { split } from './split'

test('split', () => {
  expect(split('|')('foo|bar|baz')).toEqual([ 'foo', 'bar', 'baz' ])

  expect(split('.', 'a.b.c.xyz.d')).toEqual([
    'a',
    'b',
    'c',
    'xyz',
    'd',
  ])
})
