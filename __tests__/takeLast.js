const R = require('../rambda')

describe('takeLast', () => {
  it('', () => {
    expect(R.takeLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

    expect(R.takeLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'bar', 'baz' ])

    expect(R.takeLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])

    expect(R.takeLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])

    expect(R.takeLast(10, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])

    expect(R.takeLast(3, 'rambda')).toEqual('bda')

    expect(R.takeLast(7, 'rambda')).toEqual('rambda')
  })
})
