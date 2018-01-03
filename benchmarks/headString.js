const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = 'foo'

const suite = new Benchmark.Suite()

suite.add('Rambda.head when string', () => {
  R.head(holder)
})
  .add('Ramda', () => {
    Ramda.head(holder)
  })
module.exports = suite
