const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

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
    eq(R.path([ -1, 'y' ],
      [
        {
          x : 1,
          y : 99,
        },
        {
          x : 2,
          y : 98,
        },
        {
          x : 3,
          y : 97,
        },
      ]),
    97)
  })
})
