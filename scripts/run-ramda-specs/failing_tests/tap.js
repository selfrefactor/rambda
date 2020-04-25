const _curry2 = require('rambda/internal/_curry2')
const eq = require('./shared/eq')
const listXf = require('./helpers/listXf')
const R = require('../../../../dist/rambda.js')

describe('tap', () => {
  const pushToList = _curry2((lst, x) => {
    lst.push(x)
  })
  it('can act as a transducer', () => {
    const sideEffect = []
    const numbers = [ 1, 2, 3, 4, 5 ]
    const xf = R.compose(R.map(R.identity), R.tap(pushToList(sideEffect)))
    eq(R.into(
      [], xf, numbers
    ), numbers)
    eq(sideEffect, numbers)
  })
  it('dispatches to transformer objects', () => {
    const sideEffect = []
    const pushToSideEffect = pushToList(sideEffect)
    eq(R.tap(pushToSideEffect, listXf), {
      f  : pushToSideEffect,
      xf : listXf,
    })
  })
})
