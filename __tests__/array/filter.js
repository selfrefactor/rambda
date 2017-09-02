const R = require('../../rambda')

test('with array', () => {
  const isEven = n => n % 2 === 0

  expect(
    R.filter(
      isEven,
      [ 1, 2, 3, 4 ]
    )
  ).toEqual([ 2, 4 ])
})

test('with object', () => {
  const isEven = n => n % 2 === 0

  expect(
    R.filter(
      isEven,
      {
        a : 1,
        b : 2,
        c : 3,
        d : 4,
      }
    )
  ).toEqual({
    b : 2,
    d : 4,
  })
})

test('with compose', () => {
  const result = R.compose(
    R.filter(R.equals(2)),
    R.map(R.add(1))
  )({
    a : 1,
    b : 2,
    c : 3,
  })

  expect(
    result
  ).toEqual({ a : 2 })
})
