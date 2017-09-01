const R = require('../rambda')

describe('uniq', () => {
  it('', () => {
    expect(
      R.uniq([ 1, 2, 3, 3, 3, 1, 2, 0 ])
    ).toEqual([ 1, 2, 3, 0 ])
    expect(R.uniq([ 1, 1, 2, 1 ])).toEqual([ 1, 2 ])
    expect([ 1, '1' ]).toEqual([ 1, '1' ])
    expect(R.uniq([ [ 42 ], [ 42 ] ])).toEqual([ [ 42 ] ])
  })
})
