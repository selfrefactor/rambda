const eq = require('./shared/eq')
const R = require('rambda')

describe('path', () => {
  const deepObject = {
    a            : { b : { c : 'c' } },
    falseVal     : false,
    nullVal      : null,
    undefinedVal : undefined,
    arrayVal     : [ 'arr' ],
  }
  it('takes a path that contains negative indices into arrays', () => {
    eq(R.path([ 'x', -2 ], { x : [ 'a', 'b', 'c', 'd' ] }), 'c')
    eq(R.path([ -1, 'y' ], [ {
      x : 1,
      y : 99,
    }, {
      x : 2,
      y : 98,
    }, {
      x : 3,
      y : 97,
    } ]), 97)
  })
  it('gets a deep property\'s value from objects', () => {
    eq(R.path([ 'a', 'b', 'c' ], deepObject), 'c')
    eq(R.path([ 'a' ], deepObject), deepObject.a)
  })
  it('returns undefined for items not found', () => {
    eq(R.path([ 'a', 'b', 'foo' ], deepObject), undefined)
    eq(R.path([ 'bar' ], deepObject), undefined)
    eq(R.path([ 'a', 'b' ], { a : null }), undefined)
  })
  it('works with falsy items', () => {
    eq(R.path([ 'toString' ], false), Boolean.prototype.toString)
  })
})
