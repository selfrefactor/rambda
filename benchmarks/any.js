const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.any', () => {
  R.any(val => val > 2, [ 1, 2, 3, 4 ])
})
  .add('Ramda', () => {
    Ramda.any(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add('Lodash.some', () => {
    _.some([ 1, 2, 3, 4 ], val => val > 2)
  })

module.exports = suite
