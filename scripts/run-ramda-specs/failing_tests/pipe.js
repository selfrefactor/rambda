const assert = require('assert')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('pipe', () => {
  it('performs left-to-right function composition', () => {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    const f = R.pipe(
      parseInt, R.multiply, R.map
    )
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
      a : R.pipe(
        x, y, z
      ),
      x : 4,
      y : 2,
      z : 1,
    }
    eq(context.a(5), 40)
  })
  it('can be applied to one argument', () => {
    const f = function (
      a, b, c
    ){
      return [ a, b, c ]
    }
    const g = R.pipe(f)
    eq(g.length, 3)
    eq(g(
      1, 2, 3
    ), [ 1, 2, 3 ])
  })
})
