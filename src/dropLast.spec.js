import { dropLast } from './dropLast'

test('', () => {
  expect(dropLast(1, [ 'foo', 'bar', 'baz' ])).toStrictEqual([
    'foo',
    'bar',
  ])

  expect(dropLast(2)([ 'foo', 'bar', 'baz' ])).toStrictEqual([ 'foo' ])

  expect(dropLast(3, [ 'foo', 'bar', 'baz' ])).toStrictEqual([])

  expect(dropLast(4, [ 'foo', 'bar', 'baz' ])).toStrictEqual([])

  expect(dropLast(3, 'rambda')).toStrictEqual('ram')
})
