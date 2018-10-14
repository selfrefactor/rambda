const R = require('../../rambda')

describe('toLower', () => {
  it('', () => {
    expect(R.toLower('FOO|BAR|BAZ')).toEqual('foo|bar|baz')
  })
})
