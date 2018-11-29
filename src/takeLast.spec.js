import { takeLast } from './takeLast'
test('', () => {
  expect(takeLast(1, [ 'foo', 'bar', 'baz' ])).toStrictEqual([ 'baz' ])

  expect(takeLast(2)([ 'foo', 'bar', 'baz' ])).toStrictEqual([
    'bar',
    'baz',
  ])

  expect(takeLast(3, [ 'foo', 'bar', 'baz' ])).toStrictEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(4, [ 'foo', 'bar', 'baz' ])).toStrictEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(10, [ 'foo', 'bar', 'baz' ])).toStrictEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(3, 'rambda')).toStrictEqual('bda')

  expect(takeLast(7, 'rambda')).toStrictEqual('rambda')
})
