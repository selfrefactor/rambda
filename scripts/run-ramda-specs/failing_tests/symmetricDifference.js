const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('symmetricDifference', () => {
  const M = [ 1, 2, 3, 4 ]
  const M2 = [ 1, 2, 3, 4, 1, 2, 3, 4 ]
  const N = [ 3, 4, 5, 6 ]
  const N2 = [ 3, 3, 4, 4, 5, 5, 6, 6 ]
  const Z = [ 3, 4, 5, 6, 10 ]
  const Z2 = [ 1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8 ]
  it('does not allow duplicates in the output even if the input lists had duplicates', () => {
    eq(R.symmetricDifference(M2, N2), [ 1, 2, 5, 6 ])
  })
  it('has R.equals semantics', () => {
    function Just(x){
      this.value = x
    }
    Just.prototype.equals = function (x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.symmetricDifference([ 0 ], [ -0 ]).length, 2)
    eq(R.symmetricDifference([ -0 ], [ 0 ]).length, 2)
    eq(R.symmetricDifference([ NaN ], [ NaN ]).length, 0)
    eq(R.symmetricDifference([ new Just([ 42 ]) ], [ new Just([ 42 ]) ]).length, 0)
  })
  it('will not create a "sparse" array', () => {
    eq(R.symmetricDifference(M2, [ 3 ]).length, 3)
  })
})
