const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const holder = [1,2,3]
suite.add('Rambda.last', () => {
  R.last(holder)
})
  .add('Ramda', () => {
    Ramda.last(holder)
  })
  .add('Lodash', () => {
    _.last(holder)
  })
module.exports = suite
