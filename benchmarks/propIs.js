const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [Number, 'x', {x: 1, y: 2}]

suite
  .add('Rambda.propIs', () => {
    R.propIs(...input)
  })
  .add('Ramda.propIs', () => {
    Ramda.propIs(...input)
  })

module.exports = suite
