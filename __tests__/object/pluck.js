const R = require('../../dist/rambda.cjs')

describe('pluck', () => {
  it('', () => {
    expect(
      R.pluck('a')([ { a : 1 }, { a : 2 } ])
    ).toEqual([ 1, 2 ])
  })
})
