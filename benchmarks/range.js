const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = 10
const a = 0

const suite = new Benchmark.Suite()

suite.add('Rambda#range', () => {
  R.range(a, holder)
})
  .add('Ramda', () => {
    Ramda.range(a, holder)
  })
  .add('Lodash', () => {
    _.range(a, holder)
  })
module.exports = suite
