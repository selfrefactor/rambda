const R = require('../rambda')

test('', () => {
  expect(R.dropLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar' ])
  expect(R.dropLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo' ])
  expect(R.dropLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(R.dropLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(R.dropLast(3, 'rambda')).toEqual('ram')
})
