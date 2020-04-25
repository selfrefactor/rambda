const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('paths', () => {
  const obj = {
    a : {
      b : {
        c : 1,
        d : 2,
      },
    },
    p : [ { q : 3 }, 'Hi' ],
    x : {
      y : 'Alice',
      z : [ [ {} ] ],
    },
  }
  it('takes a path that contains negative indices into arrays', () => {
    eq(R.paths([
      [ 'p', -2, 'q' ],
      [ 'p', -1 ],
    ],
    obj),
    [ 3, 'Hi' ])
    eq(R.paths([
      [ 'p', -4, 'q' ],
      [ 'x', 'z', -1, 0 ],
    ],
    obj),
    [ undefined, {} ])
  })
})
