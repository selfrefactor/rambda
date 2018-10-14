const R = require('../../rambda')

describe('length', () => {
  it('', () => {
    expect(R.length('foo')).toEqual(3)
    expect(R.length([ 1, 2, 3 ])).toEqual(3)
    expect(R.length([])).toEqual(0)
  })
})
