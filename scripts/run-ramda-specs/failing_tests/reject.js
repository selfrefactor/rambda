const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('reject', () => {
  const even = function (x){
    return x % 2 === 0
  }
  it('dispatches to `filter` method', () => {
    function Nothing(){}
    Nothing.value = new Nothing()
    Nothing.prototype.filter = function (){
      return this
    }
    function Just(x){
      this.value = x
    }
    Just.prototype.filter = function (pred){
      return pred(this.value) ? this : Nothing.value
    }
    const m = new Just(42)
    eq(R.filter(R.T, m), m)
    eq(R.filter(R.F, m), Nothing.value)
    eq(R.reject(R.T, m), Nothing.value)
    eq(R.reject(R.F, m), m)
  })
})
