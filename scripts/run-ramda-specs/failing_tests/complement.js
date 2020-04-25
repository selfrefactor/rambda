const S = require('sanctuary')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('complement', () => {
  it('accepts fantasy-land functors', () => {
    const { Just } = S
    const { Nothing } = S
    eq(R.complement(Just(true)), Just(false))
    eq(R.complement(Just(false)), Just(true))
    eq(R.complement(Nothing()), Nothing())
  })
})
