const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const suite = new Benchmark.Suite()
const input = [{ b: 2, c: 'foo', d: [1, 2, 3] }, 1, new Date(), null]

suite
  .add('Rambda.clone', () => {
    R.clone(input)
  })
  .add('Ramda.clone', () => {
    Ramda.clone(input)
  })
  .add('Lodash.cloneDeep', () => {
    _.cloneDeep(input)
  })

module.exports = suite
