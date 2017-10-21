const R = require('../rambda')

test('R.includes with string', () => {
  const str = 'more is less'

  expect(R.includes('less')(str)).toBeTruthy()

  expect(R.includes('never', str)).toBeFalsy()
})

test('R.includes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(R.includes(2)(arr)).toBeTruthy()

  expect(R.includes(4, arr)).toBeFalsy()
})
