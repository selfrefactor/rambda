const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const holders = [undefined, null, 1, '', [], {}]

const suite = new Benchmark.Suite()

suite.add('Rambda.isEmpty', () => {
    holders.forEach((x) =>
      R.isEmpty(x)
    )
  })
  .add('Ramda', () => {
    holders.forEach((x) =>
      Ramda.isEmpty(x)
    )
  })
  .add('Lodash', () => {
    holders.forEach((x) =>
      _.isEmpty(x)
    )
  })

module.exports = suite
