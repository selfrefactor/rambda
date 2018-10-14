const R = require('../rambda')

describe('tap', () => {
  it('', () => {
    let a = 1
    const sayX = x => a = x

    expect(R.tap(sayX, 100)).toEqual(100)
    expect(a).toEqual(100)
  })
})
