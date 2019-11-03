const eq = require('./shared/eq')
const R = require('rambda')

describe('keys', () => {
  const obj = {
    a : 100,
    b : [ 1, 2, 3 ],
    c : {
      x : 200,
      y : 300,
    },
    d : 'D',
    e : null,
    f : undefined,
  }
  function C(){ this.a = 100; this.b = 200 }
  C.prototype.x = function(){ return 'x' }
  C.prototype.y = 'y'
  const cobj = new C()
  it('works for primitives', () => {
    eq(R.keys(null), [])
    eq(R.keys(undefined), [])
    eq(R.keys(55), [])
    eq(R.keys('foo'), [])
    eq(R.keys(true), [])
    eq(R.keys(false), [])
    eq(R.keys(NaN), [])
    eq(R.keys(Infinity), [])
    eq(R.keys([]), [])
  })
  it('does not include the given object\'s prototype properties', () => {
    eq(R.keys(cobj).sort(), [ 'a', 'b' ])
  })
})
