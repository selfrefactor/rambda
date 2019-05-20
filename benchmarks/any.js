const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const fn = val => val > 2

suite
  .add('Rambda.any', () => {
    R.any(fn, input)
  })
  .add('Ramda.any', () => {
    Ramda.any(fn, input)
  })
  .add('Lodash.some', () => {
    _.some(input, fn)
  })

module.exports = suite
