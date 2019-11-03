const eq = require('./shared/eq')
const R = require('rambda')

describe('without', () => {
  it('can act as a transducer', () => {
    eq(R.into([], R.without([ 1 ]), [ 1 ]), [])
  })
  it('has R.equals semantics', () => {
    function Just(x){ this.value = x }
    Just.prototype.equals = function(x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.without([ 0 ], [ -0 ]).length, 1)
    eq(R.without([ -0 ], [ 0 ]).length, 1)
    eq(R.without([ NaN ], [ NaN ]).length, 0)
    eq(R.without([ [ 1 ] ], [ [ 1 ] ]).length, 0)
    eq(R.without([ new Just([ 42 ]) ], [ new Just([ 42 ]) ]).length, 0)
  })
})
