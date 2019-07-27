const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]

suite
  .add('Rambda.product', () => {
    R.product(input)
  })
  .add('Ramda.product', () => {
    Ramda.product(input)
  })

module.exports = suite
