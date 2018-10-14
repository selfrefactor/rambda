const R = require('../rambda')

describe('test', () => {
  it('', () => {
    expect(R.test(/^x/, 'xyz')).toBeTruthy()

    expect(R.test(/^y/)('xyz')).toBeFalsy()
  })
})
