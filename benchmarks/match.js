const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite
  .add('Rambda.match', () => {
    R.match(/a./g)('foo bar baz')
  })
  .add('Ramda', () => {
    Ramda.match(/a./g)('foo bar baz')
  })

module.exports = suite
