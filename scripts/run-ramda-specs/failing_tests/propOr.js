const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('propOr', () => {
  const fred = {
    name : 'Fred',
    age  : 23,
  }
  const anon = { age : 99 }
  const nm = R.propOr('Unknown', 'name')
  it('handles number as property', () => {
    const deities = [ 'Cthulhu', 'Dagon', 'Yog-Sothoth' ]
    eq(R.propOr(
      'Unknown', 0, deities
    ), 'Cthulhu')
    eq(R.propOr(
      'Unknown', 1, deities
    ), 'Dagon')
    eq(R.propOr(
      'Unknown', 2, deities
    ), 'Yog-Sothoth')
    eq(R.propOr(
      'Unknown', -1, deities
    ), 'Yog-Sothoth')
    eq(R.propOr(
      'Unknown', 3, deities
    ), 'Unknown')
  })
})
