const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [null, undefined, 3]

suite
  .add('Rambda.defaultTo simple', () => {
    R.defaultTo(3, input[0])
  })
  .add('Ramda.defaultTo', () => {
    Ramda.defaultTo(3, input[0])
  })
  .add('Rambda.defaultTo (when several arguments)', () => {
    R.defaultTo(3, ...input)
  })

module.exports = suite
