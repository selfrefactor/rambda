const R = require('../../rambda')

describe('values', () => {
  it('', () => {
    expect(R.values({
      a : 1,
      b : 2,
      c : 3,
    })).toEqual([ 1, 2, 3 ])
  })
})
