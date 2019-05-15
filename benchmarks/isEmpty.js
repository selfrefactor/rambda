const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const holder = [undefined, null, '', [], {}]

const suite = new Benchmark.Suite()

suite.add('Rambda.isEmpty', () => {
    holder.forEach((x) =>
      R.isEmpty(x)
    )
  })
  .add('Ramda', () => {
    holder.forEach((x) =>
      Ramda.isEmpty(x)
    )
  })
  .add('Lodash', () => {
    holder.forEach((x) =>
      _.isEmpty(x)
    )
  })

module.exports = suite
