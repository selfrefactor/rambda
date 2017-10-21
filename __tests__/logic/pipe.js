const R = require('../../rambda')

describe('pipe', () => {
  it('', () => {
    const result = R.pipe(
      R.map(R.add(1)),
      R.map(R.add(10)),
      R.last
    )([ 1, 2, 3 ])

    expect(result).toEqual(14)
  })
})
