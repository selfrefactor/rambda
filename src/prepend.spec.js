import { prepend } from './prepend'

test('', () => {
  expect(prepend('f', 'oo')).toStrictEqual('foo')
})

test('prepend', () => {
  expect(prepend('yes', [ 'foo', 'bar', 'baz' ])).toStrictEqual([
    'yes',
    'foo',
    'bar',
    'baz',
  ])

  expect(prepend('foo')([])).toStrictEqual([ 'foo' ])
})
