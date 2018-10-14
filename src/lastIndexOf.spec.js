const R = require('../../rambda')

test('', () => {
  const a = R.lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
  const b = R.lastIndexOf(1)([ 1, 2, 3, 1, 2 ])

  expect(a).toEqual(3)
  expect(b).toEqual(3)
})

test('false', () => {
  const a = R.lastIndexOf(10, [ 1, 2, 3, 1, 2 ])

  expect(a).toEqual(-1)
})
