const _isTransformer = require('rambda/internal/_isTransformer')
const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('groupBy', () => {
  it('dispatches on transformer objects in list position', () => {
    const byType = R.prop('type')
    const xf = {
      '@@transducer/init' : function (){
        return {}
      },
      '@@transducer/result' : function (x){
        return x
      },
      '@@transducer/step' : R.mergeRight,
    }
    eq(_isTransformer(R.groupBy(byType, xf)), true)
  })
})
