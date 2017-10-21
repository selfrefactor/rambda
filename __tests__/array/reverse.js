const R = require('../../rambda')

test('', () => {
  expect(R.reverse([ 1, 2, 3 ])).toEqual([ 3, 2, 1 ])
})

test('it doesn\'t mutate', () => {
  const arr = [ 1, 2, 3 ]

  expect(R.reverse(arr)).toEqual([ 3, 2, 1 ])

  expect(arr).toEqual([ 1, 2, 3 ])
})
