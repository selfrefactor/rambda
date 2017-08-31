const R = require('../../dist/rambda.cjs')

describe('has', () => {
  it('has', () => {
    expect(
      R.has('a')({ a : 1 })
    ).toBeTruthy()
    expect(
      R.has('b', { a : 1 })
    ).toBeFalsy()
  })
})
