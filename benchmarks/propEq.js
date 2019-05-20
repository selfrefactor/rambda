const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = { foo: 'bar' }
const value = ['foo', 'bar']

suite
  .add('Rambda.propEq', () => {
    R.propEq(...value)(input)
  })
  .add('Ramda.propEq', () => {
    Ramda.propEq(...value)(input)
  })

module.exports = suite
