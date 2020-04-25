const eq = require('./shared/eq')
const Maybe = require('./shared/Maybe')
const R = require('../../../../dist/rambda.js')

describe('filter', () => {
  const even = function (x){
    return x % 2 === 0
  }
  it('dispatches to passed-in non-Array object with a `filter` method', () => {
    const f = {
      filter : function (f){
        return f('called f.filter')
      },
    }
    eq(R.filter(s => s, f),
      'called f.filter')
  })
  it('correctly uses fantasy-land implementations', () => {
    const m1 = Maybe.Just(-1)
    const m2 = R.filter(x => x > 0, m1)
    eq(m2.isNothing, true)
  })
})
