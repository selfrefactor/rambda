const S = require('sanctuary')

const eq = require('./shared/eq')
const R = require('../../../../dist/rambda.js')
describe('both', () => {
  it('accepts fantasy-land applicative functors', () => {
    const { Just } = S
    const { Nothing } = S
    eq(R.both(Just(true), Just(true)), Just(true))
    eq(R.both(Just(true), Just(false)), Just(false))
    eq(R.both(Just(true), Nothing()), Nothing())
    eq(R.both(Nothing(), Just(false)), Nothing())
    eq(R.both(Nothing(), Nothing()), Nothing())
  })
})
