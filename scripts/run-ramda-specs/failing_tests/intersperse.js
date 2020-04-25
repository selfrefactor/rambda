const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('intersperse', () => {
  it('dispatches', () => {
    const obj = {
      intersperse : function (x){
        return 'override ' + x
      },
    }
    eq(R.intersperse('x', obj), 'override x')
  })
})
