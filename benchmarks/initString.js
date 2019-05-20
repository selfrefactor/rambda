const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = 'foo'

suite
  .add('Rambda.init (when string)', () => {
    R.init(input)
  })
  .add('Ramda.init (when string)', () => {
    Ramda.init(input)
  })

module.exports = suite
