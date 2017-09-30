const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = { a : { b : 2 } }
const a = [ 'a', 'b' ]

const suite = new Benchmark.Suite()

suite.add('Rambda.path', () => {
  R.path(a, holder)
})
  .add('Ramda', () => {
    Ramda.path(a, holder)
  })
  .add('Lodash.get', () => {
    _.get(holder, a)
  })
module.exports = suite
