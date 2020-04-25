const S = require('sanctuary')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('either', () => {
  it('accepts fantasy-land applicative functors', () => {
    const { Just } = S
    const { Nothing } = S
    eq(R.either(Just(true), Just(true)), Just(true))
    eq(R.either(Just(true), Just(false)), Just(true))
    eq(R.either(Just(false), Just(false)), Just(false))
    eq(R.either(Just(true), Nothing()), Nothing())
    eq(R.either(Nothing(), Just(false)), Nothing())
    eq(R.either(Nothing(), Nothing()), Nothing())
  })
})
