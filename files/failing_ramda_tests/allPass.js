const eq = require('./shared/eq')
const R = require('rambda')

describe('allPass', () => {
  const odd = function(n){ return n % 2 !== 0 }
  const lt20 = function(n){ return n < 20 }
  const gt5 = function(n){ return n > 5 }
  const plusEq = function(w, x, y, z){ return w + x === y + z }
  it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
    eq(R.allPass([ odd, gt5, plusEq ]).length, 4)
    eq(R.allPass([ odd, gt5, plusEq ])(9, 9, 9, 9), true)
    eq(R.allPass([ odd, gt5, plusEq ])(9)(9)(9)(9), true)
  })
})
