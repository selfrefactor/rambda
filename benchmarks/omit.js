const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = {
  a : 'foo',
  b : 'bar',
  c : 'baz',
}
const a = [ 'a', 'c' ]

const suite = new Benchmark.Suite()

suite.add('Rambda.omit', () => {
  R.omit(a, holder)
})
  .add('Ramda', () => {
    Ramda.omit(a, holder)
  })
  .add('Lodash', () => {
    _.omit(holder, a)
  })
module.exports = suite
