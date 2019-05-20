const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]

suite
  .add('Rambda.init', () => {
    R.init(input)
  })
  .add('Ramda.init', () => {
    Ramda.init(input)
  })
  .add('Lodash.initial', () => {
    _.initial(input)
  })

module.exports = suite
