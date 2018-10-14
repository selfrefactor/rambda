const R = require('../rambda')

describe('sort', () => {
  it('', () => {
    expect(R.sort((a, b) => a > b)([ 'foo', 'bar', 'baz' ])).toEqual([ 'bar', 'baz', 'foo' ])

    expect(R.sort((a, b) => a - b)([ 2, 3, 1 ])).toEqual([ 1, 2, 3 ])
  })
})
