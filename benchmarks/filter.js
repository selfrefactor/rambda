const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const fn = val => val > 2

suite
  .add('Rambda.filter', () => {
    R.filter(fn, input)
  })
  .add('Ramda.filter', () => {
    Ramda.filter(fn, input)
  })
  .add('Lodash.filter', () => {
    _.filter(input, fn)
  })

module.exports = suite
