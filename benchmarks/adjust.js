const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.adjust', () => {
  R.adjust(val => val + 1, 0, [ 0, 1, 2 ])
})
  .add('Ramda.adjust', () => {
    Ramda.adjust(val => val + 1, 0, [ 0, 1, 2 ])
  })

module.exports = suite
