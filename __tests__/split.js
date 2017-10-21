const R = require('../rambda')

describe('split', () => {
  it('', () => {
    expect(R.split('|')('foo|bar|baz')).toEqual([ 'foo', 'bar', 'baz' ])

    expect(R.split('.', 'a.b.c.xyz.d')).toEqual([ 'a', 'b', 'c', 'xyz', 'd' ])
  })
})
