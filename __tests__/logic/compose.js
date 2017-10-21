const R = require('../../rambda')

describe('compose', () => {
  it('', () => {
    const result = R.compose(
      R.last,
      R.map(R.add(10)),
      R.map(R.add(1))
    )([ 1, 2, 3 ])

    expect(result).toEqual(14)
  })
})
