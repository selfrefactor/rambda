const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [2, 4, 6]

suite
  .add('Rambda.mean', () => {
    R.mean(input)
  })
  .add('Ramda.mean', () => {
    Ramda.mean(input)
  })

module.exports = suite
