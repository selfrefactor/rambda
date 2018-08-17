const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

const duplicate = n => [n, n]
suite
.add('Rambda.flatMap', () => {
  R.flatMap(duplicate, [1, 2, 3])
})
.add('Ramda.chain', () => {
  Ramda.chain(duplicate, [1, 2, 3])
})
.add('Lodash.flatMap', () => {
  _.flatMap([1, 2, 3], duplicate)
})

module.exports = suite
