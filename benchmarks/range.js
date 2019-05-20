const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [0, 10]

suite
  .add('Rambda.range', () => {
    R.range(...input)
  })
  .add('Ramda.range', () => {
    Ramda.range(...input)
  })
  .add('Lodash.range', () => {
    _.range(...input)
  })

module.exports = suite
