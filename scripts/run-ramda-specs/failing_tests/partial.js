const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('partial', () => {
  const disc = function (
    a, b, c
  ){
    // note disc(3, 7, 4) => 1
    return b * b - 4 * a * c
  }
  it('caches the initially supplied arguments', () => {
    const f = R.partial(disc, [ 3 ])
    eq(f(7, 4), 1)
    const g = R.partial(disc, [ 3, 7 ])
    eq(g(4), 1)
  })
  it('correctly reports the arity of the new function', () => {
    const f = R.partial(disc, [ 3 ])
    eq(f.length, 2)
    const g = R.partial(disc, [ 3, 7 ])
    eq(g.length, 1)
  })
})
