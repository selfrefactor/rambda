const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = { bar : 'yes' }
const a = {
  foo : 'bar',
  bar : 'baz',
}

const suite = new Benchmark.Suite()

suite.add('Rambda.merge', () => {
  R.merge(a, holder)
})
  .add('Ramda', () => {
    Ramda.merge(a, holder)
  })
  .add('Lodash', () => {
    _.merge(a, holder)
  })
module.exports = suite
