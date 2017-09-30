const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = [ 1, 2, 3, 4 ]
const a = 4

const suite = new Benchmark.Suite()

suite.add('Rambda.contains', () => {
  R.contains(a, holder)
})
  .add('Ramda', () => {
    Ramda.contains(a, holder)
  })
  .add('Lodash.includes', () => {
    _.includes(holder, a)
  })

module.exports = suite
