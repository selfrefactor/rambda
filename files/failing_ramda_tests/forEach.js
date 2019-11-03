const eq = require('./shared/eq')
const R = require('rambda')

describe('forEach', () => {
  const list = [ {
    x : 1,
    y : 2,
  }, {
    x : 100,
    y : 200,
  }, {
    x : 300,
    y : 400,
  }, {
    x : 234,
    y : 345,
  } ]
  it('dispatches to `forEach` method', () => {
    let dispatched = false
    const fn = function(){}
    function DummyList(){}
    DummyList.prototype.forEach = function(callback){
      dispatched = true
      eq(callback, fn)
    }
    R.forEach(fn, new DummyList())
    eq(dispatched, true)
  })
})
