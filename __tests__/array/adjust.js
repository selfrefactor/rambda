const R = require('../../rambda')

describe('adjust', () => {
  it('without curring', () => {
    expect(R.adjust(R.add(10), 1, [ 0, 1, 2 ])).toEqual([ 0, 11, 2 ])
  })

  it('with curring type 1 1 1', () => {
    expect(R.adjust(R.add(10))(1)([ 0, 1, 2 ])).toEqual([ 0, 11, 2 ])
  })

  it('with curring type 1 2', () => {
    expect(R.adjust(R.add(10))(1, [ 0, 1, 2 ])).toEqual([ 0, 11, 2 ])
  })

  it('with curring type 2 1', () => {
    expect(R.adjust(R.add(10), 1)([ 0, 1, 2 ])).toEqual([ 0, 11, 2 ])
  })
})
