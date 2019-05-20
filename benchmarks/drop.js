const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const value = 3

suite
  .add('Rambda.drop', () => {
    R.drop(value)(input)
  })
  .add('Ramda.drop', () => {
    Ramda.drop(value)(input)
  })

module.exports = suite
