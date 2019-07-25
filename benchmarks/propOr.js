const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const defaultValue = 2
const param = 'b'
const obj = { a: 1 }

suite
  .add('Rambda.propOr', () => {
    R.propOr(defaultValue, param, obj)
  })
  .add('Ramda.propOr', () => {
    Ramda.propOr(defaultValue, param, obj)
  })

module.exports = suite
