const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [3, 2]

suite
  .add('Rambda.mathMod', () => {
    R.mathMod(...input)
  })
  .add('Ramda.mathMod', () => {
    Ramda.mathMod(...input)
  })

module.exports = suite
