const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.pipe', () => {
  R.pipe(val => val.length, val => val + 1)([ 1, 2, 3, 4 ])
})
  .add('Ramda', () => {
    Ramda.pipe(val => val.length, val => val + 1)([ 1, 2, 3, 4 ])
  })
  .add('Lodash.flow', () => {
    _.flow(val => val.length, val => val + 1)([ 1, 2, 3, 4 ])
  })

module.exports = suite
