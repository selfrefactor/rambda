const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const defaultValue = 2
const list = ['b']
const obj = { a: 1 }

suite
  .add('Rambda.pathOr', () => {
    R.pathOr(defaultValue, list, obj)
  })
  .add('Ramda.pathOr', () => {
    Ramda.pathOr(defaultValue, list, obj)
  })

module.exports = suite
