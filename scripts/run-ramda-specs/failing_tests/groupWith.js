const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('groupWith', () => {
  it('can be turned into the original list through concatenation', () => {
    const list = [ 1, 1, 2, 3, 4, 4, 5, 5 ]
    eq(R.unnest(R.groupWith(R.equals, list)), list)
    eq(R.unnest(R.groupWith(R.complement(R.equals), list)), list)
    eq(R.unnest(R.groupWith(R.T, list)), list)
    eq(R.unnest(R.groupWith(R.F, list)), list)
  })
  it('also works on strings', () => {
    eq(R.groupWith(R.equals)('Mississippi'), [
      'M',
      'i',
      'ss',
      'i',
      'ss',
      'i',
      'pp',
      'i',
    ])
  })
})
