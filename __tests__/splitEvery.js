const R = require('../rambda')

test('', () => {
  expect(R.splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])).toEqual([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ])

  expect(R.splitEvery(3)('foobarbaz')).toEqual([ 'foo', 'bar', 'baz' ])

  expect(R.splitEvery(0)('foo')).toEqual([ 'f', 'o', 'o' ])
})
