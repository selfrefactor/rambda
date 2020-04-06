const eq = require('./shared/eq')
const R = require('../../../../../rambda/dist/rambda.js')

describe('anyPass', () => {
  const odd = function(n){ return n % 2 !== 0 }
  const gt20 = function(n){ return n > 20 }
  const lt5 = function(n){ return n < 5 }
  const plusEq = function(w, x, y, z){ return w + x === y + z }
  it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
    eq(R.anyPass([ odd, lt5, plusEq ]).length, 4)
    eq(R.anyPass([ odd, lt5, plusEq ])(6, 7, 8, 9), false)
    eq(R.anyPass([ odd, lt5, plusEq ])(6)(7)(8)(9), false)
  })
})