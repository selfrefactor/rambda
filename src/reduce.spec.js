const R = require('../../rambda')

describe('reduce', () => {
  it('with compose', () => {
    const convertToString = (acc, value) => acc + value

    expect(R.compose(
      R.reduce(convertToString, ''),
      R.map(x => x + 1)
    )([ 1, 2, 3 ])).toEqual('234')
  })

  it('', () => {
    const result = R.reduce((acc, val) => acc + val)(1)([ 1, 2, 3 ])

    expect(result).toEqual(7)
  })

  it('with curry', () => {
    const add = R.curry((n, n2) => n + n2)

    expect(R.reduce(add, 0, [ 1, 2, 3 ])).toEqual(6)
  })
})
