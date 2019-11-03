const jsv = require('jsverify')

const eq = require('./shared/eq')
const funcN = require('./shared/funcN')
const R = require('rambda')
describe('flip', () => {
  it('returns a function which inverts the first two arguments to the supplied function', () => {
    const f = function(a, b, c){ return a + ' ' + b + ' ' + c }
    const g = R.flip(f)
    eq(f('a', 'b', 'c'), 'a b c')
    eq(g('a', 'b', 'c'), 'b a c')
  })
  it('returns a curried function', () => {
    const f = function(a, b, c){ return a + ' ' + b + ' ' + c }
    const g = R.flip(f)('a')
    eq(g('b', 'c'), 'b a c')
  })
  it('returns a function with the correct arity', () => {
    const f2 = function(a, b){ return a + ' ' + b }
    const f3 = function(a, b, c){ return a + ' ' + b + ' ' + c }
    eq(R.flip(f2).length, 2)
    eq(R.flip(f3).length, 3)
  })
})
describe('flip properties', () => {
  jsv.property('inverts first two arguments', funcN(3), jsv.json, jsv.json, jsv.json, (f, a, b, c) => {
    const g = R.flip(f)

    return R.equals(f(a, b, c), g(b, a, c))
  })
})
