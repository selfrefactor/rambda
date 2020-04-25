const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('prop', () => {
  const fred = {
    name : 'Fred',
    age  : 23,
  }
  it('handles number as property', () => {
    const deities = [ 'Cthulhu', 'Dagon', 'Yog-Sothoth' ]
    eq(R.prop(0, deities), 'Cthulhu')
    eq(R.prop(1, deities), 'Dagon')
    eq(R.prop(2, deities), 'Yog-Sothoth')
    eq(R.prop(-1, deities), 'Yog-Sothoth')
  })
})
