const R = require('../../dist/rambda.cjs')

describe('defaultTo', () => {
  it('', () => {
    expect(
      R.defaultTo('foo')(undefined)
    ).toEqual('foo')

    expect(
      R.defaultTo('foo', undefined)
    ).toEqual('foo')

    expect(
      R.defaultTo('foo', 1)
    ).toEqual('foo')

    expect(
      R.defaultTo('foo', 'bar')
    ).toEqual('bar')

    expect(
      R.defaultTo(undefined, 'bar')
    ).toEqual(undefined)
  })
})
