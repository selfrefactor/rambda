const R = require('../../dist/rambda.cjs')

describe('drop', () => {
  it('find', () => {
    expect(
      R.find(R.propEq('a', 2))([ { a : 1 }, { a : 2 }, { a : 3 } ])
    ).toEqual({ a : 2 })

    expect(
      R.find(R.propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])
    ).toEqual(undefined)
  })
})
