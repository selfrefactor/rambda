import { dropLast } from './dropLast'

test('', () => {
  expect(dropLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
  ])

  expect(dropLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo' ])

  expect(dropLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(dropLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(dropLast(3, 'rambda')).toEqual('ram')
})
