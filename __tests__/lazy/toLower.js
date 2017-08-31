const R = require('../../dist/rambda.cjs')

describe('toLower', () => {
  it('', () => {
    expect(
      R.toLower('FOO|BAR|BAZ')
    ).toEqual('foo|bar|baz')
  })
})
