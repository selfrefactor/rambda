const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const holder = {
  a : 'foo',
  b : 'bar',
  c : 'baz',
}
const a = 'c'

const suite = new Benchmark.Suite()

suite.add('Rambda#propEq', () => {
  R.propEq(
    'foo',
    'bar'
  )({ foo : 'bar' })
})
  .add('Ramda', () => {
    Ramda.propEq(
      'foo',
      'bar'
    )({ foo : 'bar' })
  })
module.exports = suite
