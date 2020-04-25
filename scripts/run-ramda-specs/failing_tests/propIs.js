const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('propIs', () => {
  it('handles number as property', () => {
    const deities = [ 'Cthulhu', 'Dagon', 'Yog-Sothoth' ]
    eq(R.propIs(
      String, 0, deities
    ), true)
    eq(R.propIs(
      String, 1, deities
    ), true)
    eq(R.propIs(
      String, 2, deities
    ), true)
    eq(R.propIs(
      String, -1, deities
    ), true)
    eq(R.propIs(
      String, 3, deities
    ), false)
  })
})
