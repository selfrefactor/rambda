import { take } from './take'

test('take', () => {
  const arr = [ 'foo', 'bar', 'baz' ]

  expect(take(1, arr)).toEqual([ 'foo' ])

  expect(arr).toEqual([ 'foo', 'bar', 'baz' ])

  expect(take(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar' ])
  expect(take(3, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])
  expect(take(4, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])
  expect(take(3)('rambda')).toEqual('ram')
})
