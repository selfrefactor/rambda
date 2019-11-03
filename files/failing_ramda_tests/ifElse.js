const eq = require('./shared/eq')
const R = require('rambda')

describe('ifElse', () => {
  const t = function(a){ return a + 1 }
  const identity = function(a){ return a }
  const isArray = function(a){ return Object.prototype.toString.call(a) === '[object Array]' }
  it('returns a function whose arity equals the max arity of the three arguments to `ifElse`', () => {
    function a0(){ return 0 }
    function a1(x){ return x }
    function a2(x, y){ return x + y }
    eq(R.ifElse(a0, a1, a2).length, 2)
    eq(R.ifElse(a0, a2, a1).length, 2)
    eq(R.ifElse(a1, a0, a2).length, 2)
    eq(R.ifElse(a1, a2, a0).length, 2)
    eq(R.ifElse(a2, a0, a1).length, 2)
    eq(R.ifElse(a2, a1, a0).length, 2)
  })
  it('returns a curried function', () => {
    const v = function(a){ return typeof a === 'number' }
    const ifIsNumber = R.ifElse(v)
    eq(ifIsNumber(t, identity)(15), 16)
    eq(ifIsNumber(t, identity)('hello'), 'hello')
    const fn = R.ifElse(R.gt, R.subtract, R.add)
    eq(fn(2)(7), 9)
    eq(fn(2, 7), 9)
    eq(fn(7)(2), 5)
    eq(fn(7, 2), 5)
  })
})
