const R = require('../../dist/rambda.cjs')

describe('drop', () => {
  it('filter', () => {
    const isEven = n => n % 2 === 0

    expect(
      R.filter(
        isEven,
        [ 1, 2, 3, 4 ]
      )
    ).toEqual([ 2, 4 ])
  })
})
