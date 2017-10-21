const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = [ 1, 2, 3, 4 ]
const a = val => val + 2

const suite = new Benchmark.Suite()

suite.add('Rambda.match', () => {
  R.match(/a./g)('foo bar baz')
})
  .add('Ramda', () => {
    Ramda.match(/a./g)('foo bar baz')
  })
module.exports = suite
