const R = require('../rambda')

describe('last', () => {
  it('', () => {
    expect(R.compose(
      R.last,
      R.map(R.last)
    )([ 'foo', 'bar', 'baz' ])).toEqual('z')

    expect(R.last([ 'foo', 'bar', 'baz' ])).toEqual('baz')
    expect(R.last([])).toEqual(undefined)
    expect(R.last('abc')).toEqual('c')
    expect(R.last('')).toEqual('')
  })
})
