const assert = require('assert')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('concat', () => {
  const z1 = {
    x      : 'z1',
    concat : function (that){
      return this.x + ' ' + that.x
    },
  }
  const z2 = { x : 'z2' }
  it('delegates to non-String object with a concat method, as second param', () => {
    eq(R.concat(z1, z2), 'z1 z2')
  })
})
