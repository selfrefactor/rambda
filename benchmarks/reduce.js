const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3]
const fn = (acc, value) => acc + value
const acc = ''

suite
  .add('Rambda.reduce', () => {
    R.reduce(fn, acc, input)
  })
  .add('Ramda', () => {
    Ramda.reduce(fn, acc, input)
  })
  .add('Lodash', () => {
    _.reduce(input, fn, acc)
  })

module.exports = suite
