const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite
  .add('Rambda.add', () => {
    R.add(1, 1)
  })
  .add('Ramda.add', () => {
    Ramda.add(1, 1)
  })
  .add('Lodash.add', () => {
    _.add(1, 1)
  })

module.exports = suite
