const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = 'foo'

suite
  .add('Rambda.head (when string)', () => {
    R.head(input)
  })
  .add('Ramda.head (when string)', () => {
    Ramda.head(input)
  })

module.exports = suite
