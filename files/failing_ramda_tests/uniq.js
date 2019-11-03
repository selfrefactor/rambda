const eq = require('./shared/eq')
const R = require('rambda')

describe('uniq', () => {
  it('has R.equals semantics', () => {
    function Just(x){ this.value = x }
    Just.prototype.equals = function(x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.uniq([ -0, -0 ]).length, 1)
    eq(R.uniq([ 0, -0 ]).length, 2)
    eq(R.uniq([ NaN, NaN ]).length, 1)
    eq(R.uniq([ [ 1 ], [ 1 ] ]).length, 1)
    eq(R.uniq([ new Just([ 42 ]), new Just([ 42 ]) ]).length, 1)
  })
  it('uses reference equality for functions', () => {
    eq(R.uniq([ R.add, R.identity, R.add, R.identity, R.add, R.identity ]).length, 2)
  })
})
