const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('difference', () => {
  const M = [ 1, 2, 3, 4 ]
  const M2 = [ 1, 2, 3, 4, 1, 2, 3, 4 ]
  const N = [ 3, 4, 5, 6 ]
  const N2 = [ 3, 3, 4, 4, 5, 5, 6, 6 ]
  const Z = [ 3, 4, 5, 6, 10 ]
  const Z2 = [ 1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8 ]
  it('has R.equals semantics', () => {
    function Just(x){
      this.value = x
    }
    Just.prototype.equals = function (x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.difference([ 0 ], [ -0 ]).length, 1)
    eq(R.difference([ -0 ], [ 0 ]).length, 1)
    eq(R.difference([ NaN ], [ NaN ]).length, 0)
    eq(R.difference([ new Just([ 42 ]) ], [ new Just([ 42 ]) ]).length, 0)
  })
})
