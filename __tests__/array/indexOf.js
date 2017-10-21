const R = require('../../rambda')

describe('indexOf', () => {
  it('', () => {
    expect(R.indexOf(3, [ 1, 2, 3, 4 ])).toEqual(2)

    expect(R.indexOf(10)([ 1, 2, 3, 4 ])).toEqual(-1)
  })
})
