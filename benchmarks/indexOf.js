const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const value = 4

suite
  .add('Rambda.indexOf', () => {
    R.indexOf(value, input)
  })
  .add('Ramda.indexOf', () => {
    Ramda.indexOf(value, input)
  })
  .add('Lodash.indexOf', () => {
    _.indexOf(input, value)
  })

module.exports = suite
