const eq = require('./shared/eq')
const R = require('rambda')

describe('includes', () => {
  it('has R.equals semantics', () => {
    function Just(x){ this.value = x }
    Just.prototype.equals = function(x){
      return x instanceof Just && R.equals(x.value, this.value)
    }
    eq(R.includes(0, [ -0 ]), false)
    eq(R.includes(-0, [ 0 ]), false)
    eq(R.includes(NaN, [ NaN ]), true)
    eq(R.includes(new Just([ 42 ]), [ new Just([ 42 ]) ]), true)
  })
  it('returns true if substring is part of string', () => {
    eq(R.includes('ba', 'banana'), true)
  })
})
