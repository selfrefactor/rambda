const R = require('../dist/rambda.cjs')

describe('test', () => {
  it('', () => {
    expect(
      R.test(/^x/, 'xyz')
    ).toBeTruthy()

    expect(
      R.test(/^y/)('xyz')
    ).toBeFalsy()
  })
})
