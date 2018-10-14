const R = require('../../rambda')

describe('update', () => {
  it('', () => {
    expect(R.update(1)(0)([ 1, 2, 3 ])).toEqual([ 1, 0, 3 ])
    expect(R.update(1, 11, [ 0, 1, 2 ])).toEqual([ 0, 11, 2 ])
  })
})
