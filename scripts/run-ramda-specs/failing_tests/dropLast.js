const assert = require('assert')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('dropLast', () => {
  it('can act as a transducer', () => {
    const dropLast2 = R.dropLast(2)
    assert.deepEqual(R.into(
      [], dropLast2, [ 1, 3, 5, 7, 9, 1, 2 ]
    ), [
      1,
      3,
      5,
      7,
      9,
    ])
    assert.deepEqual(R.into(
      [], dropLast2, [ 1 ]
    ), [])
  })
})
