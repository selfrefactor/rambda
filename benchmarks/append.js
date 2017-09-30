const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()

suite.add('Rambda.append', () => {
  R.append(0)([ 1, 2, 3, 4 ])
})
  .add('Ramda', () => {
    Ramda.append(0)([ 1, 2, 3, 4 ])
  })

module.exports = suite
