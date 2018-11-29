import { take } from './take'

test('take', () => {
  const arr = [ 'foo', 'bar', 'baz' ]

  expect(take(1, arr)).toStrictEqual([ 'foo' ])

  expect(arr).toStrictEqual([ 'foo', 'bar', 'baz' ])

  expect(take(2)([ 'foo', 'bar', 'baz' ])).toStrictEqual([ 'foo', 'bar' ])
  expect(take(3, [ 'foo', 'bar', 'baz' ])).toStrictEqual([
    'foo',
    'bar',
    'baz',
  ])
  expect(take(4, [ 'foo', 'bar', 'baz' ])).toStrictEqual([
    'foo',
    'bar',
    'baz',
  ])
  expect(take(3)('rambda')).toStrictEqual('ram')
})
