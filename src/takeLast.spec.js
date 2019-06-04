import { takeLast } from './takeLast'

test('with arrays', () => {
  expect(takeLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

  expect(takeLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([
    'bar',
    'baz',
  ])

  expect(takeLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(10, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])
})

test('with strings', () => {
  expect(takeLast(3, 'rambda')).toEqual('bda')

  expect(takeLast(7, 'rambda')).toEqual('rambda')
})
