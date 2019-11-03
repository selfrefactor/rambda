const eq = require('./shared/eq')
const funcN = require('./shared/funcN')
const jsv = require('jsverify')
const R = require('rambda')

describe('curry', () => {
  it('properly reports the length of the curried function', () => {
    const f = R.curry((a, b, c, d) => (a + b * c) / d)
    eq(f.length, 4)
    const g = f(12)
    eq(g.length, 3)
    const h = g(3)
    eq(h.length, 2)
    eq(g(3, 6).length, 1)
  })
  it('preserves context', () => {
    const ctx = { x : 10 }
    const f = function(a, b){ return a + b * this.x }
    const g = R.curry(f)
    eq(g.call(ctx, 2, 4), 42)
    eq(g.call(ctx, 2).call(ctx, 4), 42)
  })
  it('supports R.__ placeholder', () => {
    const f = function(a, b, c){ return [ a, b, c ] }
    const g = R.curry(f)
    const _ = R.__
    eq(g(1)(2)(3), [ 1, 2, 3 ])
    eq(g(1)(2, 3), [ 1, 2, 3 ])
    eq(g(1, 2)(3), [ 1, 2, 3 ])
    eq(g(1, 2, 3), [ 1, 2, 3 ])
    eq(g(_, 2, 3)(1), [ 1, 2, 3 ])
    eq(g(1, _, 3)(2), [ 1, 2, 3 ])
    eq(g(1, 2, _)(3), [ 1, 2, 3 ])
    eq(g(1, _, _)(2)(3), [ 1, 2, 3 ])
    eq(g(_, 2, _)(1)(3), [ 1, 2, 3 ])
    eq(g(_, _, 3)(1)(2), [ 1, 2, 3 ])
    eq(g(1, _, _)(2, 3), [ 1, 2, 3 ])
    eq(g(_, 2, _)(1, 3), [ 1, 2, 3 ])
    eq(g(_, _, 3)(1, 2), [ 1, 2, 3 ])
    eq(g(1, _, _)(_, 3)(2), [ 1, 2, 3 ])
    eq(g(_, 2, _)(_, 3)(1), [ 1, 2, 3 ])
    eq(g(_, _, 3)(_, 2)(1), [ 1, 2, 3 ])
    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [ 1, 2, 3 ])
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [ 1, 2, 3 ])
  })
  it('supports @@functional/placeholder', () => {
    const f = function(a, b, c){ return [ a, b, c ] }
    const g = R.curry(f)
    const _ = {
      '@@functional/placeholder' : true,
      'x'                        : Math.random(),
    }
    eq(g(1)(2)(3), [ 1, 2, 3 ])
    eq(g(1)(2, 3), [ 1, 2, 3 ])
    eq(g(1, 2)(3), [ 1, 2, 3 ])
    eq(g(1, 2, 3), [ 1, 2, 3 ])
    eq(g(_, 2, 3)(1), [ 1, 2, 3 ])
    eq(g(1, _, 3)(2), [ 1, 2, 3 ])
    eq(g(1, 2, _)(3), [ 1, 2, 3 ])
    eq(g(1, _, _)(2)(3), [ 1, 2, 3 ])
    eq(g(_, 2, _)(1)(3), [ 1, 2, 3 ])
    eq(g(_, _, 3)(1)(2), [ 1, 2, 3 ])
    eq(g(1, _, _)(2, 3), [ 1, 2, 3 ])
    eq(g(_, 2, _)(1, 3), [ 1, 2, 3 ])
    eq(g(_, _, 3)(1, 2), [ 1, 2, 3 ])
    eq(g(1, _, _)(_, 3)(2), [ 1, 2, 3 ])
    eq(g(_, 2, _)(_, 3)(1), [ 1, 2, 3 ])
    eq(g(_, _, 3)(_, 2)(1), [ 1, 2, 3 ])
    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [ 1, 2, 3 ])
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [ 1, 2, 3 ])
  })
  it('forwards extra arguments', () => {
    const f = function(a, b, c){
      void c

      return Array.prototype.slice.call(arguments)
    }
    const g = R.curry(f)
    eq(g(1, 2, 3), [ 1, 2, 3 ])
    eq(g(1, 2, 3, 4), [ 1, 2, 3, 4 ])
    eq(g(1, 2)(3, 4), [ 1, 2, 3, 4 ])
    eq(g(1)(2, 3, 4), [ 1, 2, 3, 4 ])
    eq(g(1)(2)(3, 4), [ 1, 2, 3, 4 ])
  })
})
describe('curry properties', () => {
  jsv.property('curries multiple values', funcN(4), jsv.json, jsv.json, jsv.json, jsv.json, (f, a, b, c, d) => {
    const g = R.curry(f)

    return R.all(R.equals(f(a, b, c, d)), [
      g(a, b, c, d),
      g(a)(b)(c)(d),
      g(a)(b, c, d),
      g(a, b)(c, d),
      g(a, b, c)(d),
    ])
  })
  jsv.property('curries with placeholder', funcN(3), jsv.json, jsv.json, jsv.json, (f, a, b, c) => {
    const _ = {
      '@@functional/placeholder' : true,
      'x'                        : Math.random(),
    }
    const g = R.curry(f)

    return R.all(R.equals(f(a, b, c)), [
      g(_, _, c)(a, b),
      g(a, _, c)(b),
      g(_, b, c)(a),
      g(a, _, _)(_, c)(b),
      g(a, b, _)(c),
    ])
  })
})
