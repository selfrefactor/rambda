const assert = require('assert')
const sinon = require('sinon')

const eq = require('./shared/eq')
const R = require('rambda')
describe('take', () => {
  it('handles zero correctly (#1224)', () => {
    eq(R.into([], R.take(0), [ 1, 2, 3 ]), [])
  })
  it('steps correct number of times', () => {
    const spy = sinon.spy()
    R.into([], R.compose(R.map(spy), R.take(2)), [ 1, 2, 3 ])
    sinon.assert.calledTwice(spy)
  })
  it('transducer called for every member of list if `n` is < 0', () => {
    const spy = sinon.spy()
    R.into([], R.compose(R.map(spy), R.take(-1)), [ 1, 2, 3 ])
    sinon.assert.calledThrice(spy)
  })
})
