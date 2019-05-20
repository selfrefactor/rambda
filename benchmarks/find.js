const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const fn = val => val > 2

suite
  .add('Rambda.find', () => {
    R.find(fn, input)
  })
  .add('Ramda.find', () => {
    Ramda.find(fn, input)
  })
  .add('Lodash.find', () => {
    _.find(input, fn)
  })

module.exports = suite
