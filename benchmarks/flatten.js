const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, [2, [3, 4, 6]]];

suite
  .add('Rambda.flatten', () => {
    R.flatten(input)
  })
  .add('Ramda.flatten', () => {
    Ramda.flatten(input)
  })
  .add('Lodash.flatten', () => {
    _.flatten(input)
  })

module.exports = suite
