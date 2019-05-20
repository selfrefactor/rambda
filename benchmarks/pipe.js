const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const fns = [val => val.length, val => val + 1]

suite
  .add('Rambda.pipe', () => {
    R.pipe(...fns)(input)
  })
  .add('Ramda.pipe', () => {
    Ramda.pipe(...fns)(input)
  })
  .add('Lodash.flow', () => {
    _.flow(...fns)(input)
  })

module.exports = suite
