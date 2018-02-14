const R = require('../../rambda')

test('', () => {
  expect(
    R.pluck('a')([ { a : 1 }, { a : 2 } ])
  ).toEqual([ 1, 2 ])
})

test('with number', () => {
  const input = [ [ 1, 2 ], [ 3, 4 ] ]

  expect(
    R.pluck(0, input)
  ).toEqual([ 1, 3 ])
})
