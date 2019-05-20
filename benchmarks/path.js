const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = { a: { b: 2 } }
const value = ['a', 'b']

suite
  .add('Rambda.path', () => {
    R.path(value, input)
  })
  .add('Ramda.path', () => {
    Ramda.path(value, input)
  })
  .add('Lodash.get', () => {
    _.get(input, value)
  })

module.exports = suite
