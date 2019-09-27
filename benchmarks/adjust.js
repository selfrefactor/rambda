const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [ 0, 1, 2 ]
const value = 0
const fn = val => val + 1

suite
  .add('Rambda.adjust', () => {
    R.adjust(fn, value, input)
  })
  .add('Ramda.adjust', () => {
    Ramda.adjust(value, fn, input)
  })

module.exports = suite
