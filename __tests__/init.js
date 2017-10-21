const R = require('../rambda')

describe('init', () => {
  it('', () => {
    expect(R.compose(
      R.tail,
      R.init,
      R.flatten
    )([ [ [ 1, [ 2 ] ] ], [ 3, 4 ] ])).toEqual([ 2, 3 ])

    expect(R.init([ 1, 2, 3 ])).toEqual([ 1, 2 ])
    expect(R.init([ 1, 2 ])).toEqual([ 1 ])
    expect(R.init([ 1 ])).toEqual([])
    expect(R.init([])).toEqual([])

    expect(R.init([])).toEqual([])

    expect(R.init([ 1 ])).toEqual([])

    expect(R.init('foo')).toEqual('fo')

    expect(R.init('f')).toEqual('')

    expect(R.init('')).toEqual('')
  })
})
