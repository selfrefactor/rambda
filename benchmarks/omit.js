const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = { a: 'foo', b: 'bar', c: 'baz' }
const value = ['a', 'c']

suite
  .add('Rambda.omit', () => {
    R.omit(value, input)
  })
  .add('Ramda.omit', () => {
    Ramda.omit(value, input)
  })
  .add('Lodash.omit', () => {
    _.omit(input, value)
  })

module.exports = suite
