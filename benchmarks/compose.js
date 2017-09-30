const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.compose', () => {
  R.compose(val => val + 1, val => val.length)([ 1, 2, 3, 4 ])
})
  .add('Ramda', () => {
    Ramda.compose(val => val + 1, val => val.length)([ 1, 2, 3, 4 ])
  })
  .add('Lodash.flowRight', () => {
    _.flowRight(val => val + 1, val => val.length)([ 1, 2, 3, 4 ])
  })

module.exports = suite
