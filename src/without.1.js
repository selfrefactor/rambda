const R = require('../rambda')

describe('without', () => {
  it('should return a new list without values in the first argument ', () => {
    const itemsToOmit = [ 'A', 'B', 'C' ]
    const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

    expect(R.without(itemsToOmit, collection)).toEqual([ 'D', 'E', 'F' ])
  })
})
