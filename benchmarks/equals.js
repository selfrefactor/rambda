const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const a = { a: { b: { c: 1 } } }
const b = { a: { b: { c: 1 } } }

suite
  .add('Rambda.equals', () => {
    R.equals(a, b)
  })
  .add('Ramda.equals', () => {
    Ramda.equals(a, b)
  })
  .add('Lodash.isEqual', () => {
    _.isEqual(a, b)
  })

module.exports = suite
