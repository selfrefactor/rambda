const R = require('../../rambda')

describe('range', () => {
  it('', () => {
    expect(
      R.range(
        0,
        10
      )
    ).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
  })
})
