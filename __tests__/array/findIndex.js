const R = require('../../rambda')

describe('drop', () => {
  it('findIndex', () => {
    expect(R.findIndex(R.propEq('a', 2))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(1)

    expect(R.findIndex(R.propEq('a', 1))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(0)

    expect(R.findIndex(R.propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(-1)
  })
})
