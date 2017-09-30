const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.filter', () => {
  R.filter(val => val > 2, [ 1, 2, 3, 4 ])
})
  .add('Ramda', () => {
    Ramda.filter(val => val > 2, [ 1, 2, 3, 4 ])
  })
  .add('Lodash', () => {
    _.filter([ 1, 2, 3, 4 ], val => val > 2)
  })

module.exports = suite
