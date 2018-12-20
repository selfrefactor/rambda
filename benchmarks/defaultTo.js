const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

const foo = null
const bar = undefined
const baz = 3

suite
.add('Rambda.defaultTo simple', () => {
  R.defaultTo(3,foo)
})
.add('Rambda.defaultTo when several arguments', () => {
  R.defaultTo(3,foo, bar, baz)
})
.add('Ramda', () => {
  Ramda.defaultTo(3,foo)
})

module.exports = suite
