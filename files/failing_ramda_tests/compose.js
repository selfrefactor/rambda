const assert = require('assert')
const jsv = require('jsverify')

const eq = require('./shared/eq')
const R = require('rambda')
describe('compose', () => {
  it('performs right-to-left function composition', () => {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    const f = R.compose(R.map, R.multiply, parseInt)
    eq(f.length, 2)
    eq(f('10')([ 1, 2, 3 ]), [ 10, 20, 30 ])
    eq(f('10', 2)([ 1, 2, 3 ]), [ 2, 4, 6 ])
  })
  it('passes context to functions', () => {
    function x(val){
      return this.x * val
    }
    function y(val){
      return this.y * val
    }
    function z(val){
      return this.z * val
    }
    const context = {
      a : R.compose(x, y, z),
      x : 4,
      y : 2,
      z : 1,
    }
    eq(context.a(5), 40)
  })
  it('throws if given no arguments', () => {
    assert.throws(
      () => { R.compose() },
      err => err.constructor === Error &&
               err.message === 'compose requires at least one argument'
    )
  })
  it('can be applied to one argument', () => {
    const f = function(a, b, c){ return [ a, b, c ] }
    const g = R.compose(f)
    eq(g.length, 3)
    eq(g(1, 2, 3), [ 1, 2, 3 ])
  })
})
describe('compose properties', () => {
  jsv.property('composes two functions', jsv.fn(), jsv.fn(), jsv.nat, (f, g, x) => R.equals(R.compose(f, g)(x), f(g(x))))
  jsv.property('associative', jsv.fn(), jsv.fn(), jsv.fn(), jsv.nat, (f, g, h, x) => {
    const result = f(g(h(x)))

    return R.all(R.equals(result), [
      R.compose(f, g, h)(x),
      R.compose(f, R.compose(g, h))(x),
      R.compose(R.compose(f, g), h)(x),
    ])
  })
})
