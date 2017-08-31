const R = require('../dist/rambda.cjs')

describe('tail', () => {
  it('', () => {
    expect(R.tail([ 1, 2, 3 ])).toEqual([ 2, 3 ])
    expect(R.tail([ 1, 2 ])).toEqual([ 2 ])
    expect(R.tail([ 1 ])).toEqual([])
    expect(R.tail([])).toEqual([])

    expect(R.tail('abc')).toEqual('bc')
    expect(R.tail('ab')).toEqual('b')
    expect(R.tail('a')).toEqual('')
    expect(R.tail('')).toEqual('')
  })
})
