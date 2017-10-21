const R = require('../rambda')

describe('head', () => {
  it('', () => {
    expect(R.head([ 'fi', 'fo', 'fum' ])).toEqual('fi')
    expect(R.head([])).toEqual(undefined)
    expect(R.head('foo')).toEqual('f')
    expect(R.head('')).toEqual('')
  })
})
