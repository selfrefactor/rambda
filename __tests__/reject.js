const R = require('../rambda')

const isOdd = n => n % 2 === 1

describe('reject', () => {
  it('should return items that DO NOT match predicate from array', () => {
    expect(R.reject(isOdd, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
  })

  it('should return items that DO NOT match predicate from object', () => {
    expect(R.reject(isOdd, {
      a : 1,
      b : 2,
      c : 3,
      d : 4,
    })).toEqual({
      b : 2,
      d : 4,
    })
  })

  test('should work with currying', () => {
    const result = R.compose(
      R.reject(R.equals(2)),
      R.map(R.add(1))
    )({
      a : 1,
      b : 2,
      c : 3,
    })

    expect(result).toEqual({
      b : 3,
      c : 4,
    })
  })
})
