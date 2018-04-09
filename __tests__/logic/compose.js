const R = require('../../rambda')

test('compose', () => {
  const result = R.compose(
    R.last,
    R.map(R.add(10)),
    R.map(R.add(1))
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('', () => {
  const result = R.compose(
    R.map(x => x * 2),
    (a, y) => R.filter(x => x > y, a)
  )([1, 2, 3, 4], 2)

  expect(result).toEqual([6,8])
})
