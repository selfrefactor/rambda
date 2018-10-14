const R = require('../rambda')

test('', () => {
  expect(R.drop(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'bar', 'baz' ])

  expect(R.drop(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

  expect(R.drop(3, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(R.drop(4, [ 'foo', 'bar', 'baz' ])).toEqual([])

  expect(R.drop(3, 'rambda')).toEqual('bda')
})
