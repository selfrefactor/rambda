const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite
  .add('Rambda#propEq', () => {
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
