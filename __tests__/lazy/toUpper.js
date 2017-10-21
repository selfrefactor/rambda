const R = require('../../rambda')

describe('toUpper', () => {
  it('', () => {
    expect(R.compose(
      R.join(''),
      R.map(R.toUpper),
      R.split(''),
    )('foo|bar|baz')).toEqual('FOO|BAR|BAZ')
  })
})
