const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite
.add('Rambda.assoc', () => {
  R.assoc('c', 3, {a: 1, b: 2})
})
.add('Ramda.assoc', () => {
  Ramda.assoc('c', 3, {a: 1, b: 2})
})
.add('Lodash.set', () => {
  _.set({a: 1, b: 2}, 'c', 3)
})

module.exports = suite
