const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = { a: 'foo', b: 'bar', c: 'baz' }
const value = 'c'

suite
  .add('Rambda.prop', () => {
    R.prop(value)(input)
  })
  .add('Ramda.prop', () => {
    Ramda.prop(value)(input)
  })

module.exports = suite
