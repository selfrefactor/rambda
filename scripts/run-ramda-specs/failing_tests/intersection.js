const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('intersection', () => {
  const M = [ 1, 2, 3, 4 ]
  const M2 = [ 1, 2, 3, 4, 1, 2, 3, 4 ]
  const N = [ 3, 4, 5, 6 ]
  const N2 = [ 3, 3, 4, 4, 5, 5, 6, 6 ]
  it('does not allow duplicates in the output even if the input lists had duplicates', () => {
    eq(R.intersection(M2, N2), [ 3, 4 ])
  })
  it('has R.equals semantics', () => {
    function Just(x){
      this.value = x
    }
    Just.prototype.equals = function (x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.intersection([ 0 ], [ -0 ]).length, 0)
    eq(R.intersection([ -0 ], [ 0 ]).length, 0)
    eq(R.intersection([ NaN ], [ NaN ]).length, 1)
    eq(R.intersection([ new Just([ 42 ]) ], [ new Just([ 42 ]) ]).length, 1)
  })
})
