const R = require('../../rambda')

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('with object it passes property as second argument', () => {
  R.filter((val, prop) => {
    expect(typeof prop).toEqual('string')
  })(sampleObject)
})

test('with array', () => {
  const isEven = n => n % 2 === 0

  expect(R.filter(
    isEven,
    [ 1, 2, 3, 4 ]
  )).toEqual([ 2, 4 ])
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = R.filter(
    isEven,
    sampleObject
  )
  const expectedResult = {
    b : 2,
    d : 4,
  }

  expect(result).toEqual(expectedResult)
})

test('with compose', () => {
  const result = R.compose(
    R.filter(R.equals(2)),
    R.map(R.add(1))
  )(sampleObject)

  expect(result).toEqual({ a : 2 })
})
