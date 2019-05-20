const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = 'abc'
const value = 'b'

suite
  .add('Rambda.endsWith', () => {
    R.endsWith(value, input)
  })
  .add('Ramda.endsWith', () => {
    Ramda.endsWith(value, input)
  })

module.exports = suite
