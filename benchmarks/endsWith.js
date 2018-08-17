const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite
.add('Rambda.endsWith', () => {
  R.endsWith(['b'], ['a', 'b', 'c'])
})
.add('Ramda.endsWith', () => {
  Ramda.endsWith(['b'], ['a', 'b', 'c'])
})

module.exports = suite
