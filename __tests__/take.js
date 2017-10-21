const R = require('../rambda')

describe('take', () => {
  it('', () => {
    const arr = [ 'foo', 'bar', 'baz' ]

    expect(R.take(1, arr)).toEqual([ 'foo' ])

    expect(arr).toEqual([ 'foo', 'bar', 'baz' ])

    expect(R.take(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar' ])
    expect(R.take(3, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
    expect(R.take(4, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
    expect(R.take(3)('rambda')).toEqual('ram')
  })
})
