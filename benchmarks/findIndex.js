const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const fn = val => val === 3

suite
  .add('Rambda.findIndex', () => {
    R.findIndex(fn, input)
  })
  .add('Ramda.findIndex', () => {
    Ramda.findIndex(fn, input)
  })
  .add('Lodash.findIndex', () => {
    _.findIndex(input, fn)
  })

module.exports = suite
