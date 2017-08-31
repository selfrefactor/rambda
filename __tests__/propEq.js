const R = require('../dist/rambda.cjs')

describe('propEq', () => {
  it('', () => {
    expect(
      R.propEq(
        'foo',
        'bar'
      )({ foo : 'bar' })
    ).toBeTruthy()

    expect(
      R.propEq(
        'foo',
        'bar'
      )({ foo : 'baz' })
    ).toBeFalsy()

    expect(
      R.propEq('foo')('bar')({ foo : 'baz' })
    ).toBeFalsy()
  })
})
