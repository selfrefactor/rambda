const eq = require('./shared/eq')
const R = require('rambda')

describe('filter', () => {
  const even = function(x){ return x % 2 === 0 }
  it('dispatches to passed-in non-Array object with a `filter` method', () => {
    const f = { filter : function(f){ return f('called f.filter') } }
    eq(R.filter(s => s, f), 'called f.filter')
  })
})
