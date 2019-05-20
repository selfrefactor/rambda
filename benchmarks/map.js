const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const value = val => val + 2

suite
  .add('Rambda.map', () => {
    R.map(value, input)
  })
  .add('Ramda.map', () => {
    Ramda.map(value, input)
  })
  .add('Lodash.map', () => {
    _.map(input, value)
  })

module.exports = suite
