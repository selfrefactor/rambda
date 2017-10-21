const R = require('../rambda')

test('', () => {
  const result = R.times(R.identity, 5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})

test('curry', () => {
  const result = R.times(R.identity)(5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})
