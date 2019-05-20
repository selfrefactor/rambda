const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [undefined, null, 1, '', [], {}]

suite
  .add('Rambda.isEmpty', () => {
    input.forEach(val => R.isEmpty(val))
  })
  .add('Ramda.isEmpty', () => {
    input.forEach(val => Ramda.isEmpty(val))
  })
  .add('Lodash.isEmpty', () => {
    input.forEach(val => _.isEmpty(val))
  })

module.exports = suite
