const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = [ 1, 2, 3, 4 ]

const suite = new Benchmark.Suite()

suite.add('Rambda.init', () => {
  R.init(holder)
})
  .add('Ramda', () => {
    Ramda.init(holder)
  })
  .add('Lodash', () => {
    _.initial(holder)
  })
module.exports = suite
