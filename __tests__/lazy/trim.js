const R = require('../../dist/rambda.cjs')

describe('trim', () => {
  it('', () => {
    expect(
      R.trim(' foo ')
    ).toEqual('foo')
  })
})
