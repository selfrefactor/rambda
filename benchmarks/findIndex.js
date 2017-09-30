const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = [ 1, 2, 3, 4 ]
const a = val => val === 3

const suite = new Benchmark.Suite()

suite.add('Rambda.findIndex', () => {
  R.findIndex(a, holder)
})
  .add('Ramda', () => {
    Ramda.findIndex(a, holder)
  })
  .add('Lodash', () => {
    _.findIndex(holder, a)
  })
module.exports = suite
