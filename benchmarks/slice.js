const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const ar = [1, 2, 3]
const from = 1
const to = 3

suite
  .add('Rambda.slice', () => {
    R.slice(from, to, ar)
  })
  .add('Ramda', () => {
    Ramda.slice(from, to, ar)
  })
  .add('Lodash', () => {
    _.slice(ar, from, to)
  })

module.exports = suite
