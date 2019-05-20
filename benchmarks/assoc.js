const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = { a: 1, b: 2 }
const key = 'c'
const value = 3

suite
  .add('Rambda.assoc', () => {
    R.assoc(key, value, input)
  })
  .add('Ramda.assoc', () => {
    Ramda.assoc(key, value, input)
  })
  .add('Lodash.set', () => {
    _.set(input, key, value)
  })

module.exports = suite
