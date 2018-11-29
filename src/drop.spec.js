import { drop } from './drop'

test('', () => {
  expect(drop(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'bar', 'baz' ])

  expect(drop(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

  expect(drop(3, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(drop(4, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(drop(3, 'rambda')).toEqual('bda')
})
