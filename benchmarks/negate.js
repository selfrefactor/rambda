const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = 5

suite
  .add('Rambda.negate', () => {
    R.negate(input)
  })
  .add('Ramda.negate', () => {
    Ramda.negate(input)
  })

module.exports = suite
