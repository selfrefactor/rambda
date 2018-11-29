import { drop } from './drop'

test('', () => {
  expect(drop(1, [ 'foo', 'bar', 'baz' ])).toStrictEqual([ 'bar', 'baz' ])

  expect(drop(2)([ 'foo', 'bar', 'baz' ])).toStrictEqual([ 'baz' ])

  expect(drop(3, [ 'foo', 'bar', 'baz' ])).toStrictEqual([])

  expect(drop(4, [ 'foo', 'bar', 'baz' ])).toStrictEqual([])

  expect(drop(3, 'rambda')).toStrictEqual('bda')
})
