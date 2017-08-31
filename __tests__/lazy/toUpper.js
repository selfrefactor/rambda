const R = require('../../dist/rambda.cjs')

describe('toUpper', () => {
  it('', () => {
    expect(
      R.compose(
        R.join(''),
        R.map(R.toUpper),
        R.split(''),
      )('foo|bar|baz')
    ).toEqual('FOO|BAR|BAZ')
  })
})
