const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const holder = [
  { b: 2, c: 'foo', d: [1, 2, 3] },
  1,
  new Date(),
  null
]

const suite = new Benchmark.Suite()

suite
  .add('Rambda.clone', () => {
    R.clone(holder)
  })
  .add('Ramda', () => {
    Ramda.clone(holder)
  })
  .add('Lodash', () => {
    _.cloneDeep(holder)
  })

module.exports = suite
