const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const obj = {}

suite
  .add('Rambda.identical', () => {
    R.identical(obj, obj)
  })
  .add('Ramda.identical', () => {
    Ramda.identical(obj, obj)
  })

module.exports = suite
