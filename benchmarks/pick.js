const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = { a: { b: 2 } }
const value = ['a', 'b']

suite
  .add('Rambda.pick', () => {
    R.pick(value)(input)
  })
  .add('Ramda.pick', () => {
    Ramda.pick(value)(input)
  })
  .add('Lodash.pick', () => {
    _.pick(input, value)
  })

module.exports = suite
