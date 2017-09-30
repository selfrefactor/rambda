const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.flatten', () => {
  R.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
})
  .add('Ramda', () => {
    Ramda.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
  })
  .add('Lodash', () => {
    _.flatten([ 1, [ 2, [ 3, 4, 6 ] ] ])
  })

module.exports = suite
