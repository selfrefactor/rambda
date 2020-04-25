const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')

describe('indexBy', () => {
  it('can act as a transducer', () => {
    const list = [
      {
        id    : 'xyz',
        title : 'A',
      },
      {
        id    : 'abc',
        title : 'B',
      },
    ]
    const transducer = R.compose(R.indexBy(R.prop('id')),
      R.map(R.pipe(R.adjust(0, R.toUpper), R.adjust(1, R.omit([ 'id' ])))))
    const result = R.into(
      {}, transducer, list
    )
    eq(result, {
      ABC : { title : 'B' },
      XYZ : { title : 'A' },
    })
  })
})
