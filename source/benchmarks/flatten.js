const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const { applyBenchmarkUnary, uniqListOfStrings } = require('./_utils.js')

const modes = [
  [ 1, [ 2, [ 3, 4, 6 ] ] ],
  uniqListOfStrings,
  [],
  [ { a : [ 1, 2 ] }, [], [ { a : [ 1, 2 ] }, [] ] ],
  Array(1000).fill([ 1, [ 2, [ 3, 4, 6 ] ] ]),
  Array(1000).fill([ [] ]),
]

const tests = [
  {
    fn    : R.flatten,
    label : 'Rambda',
  },
  {
    fn    : Ramda.flatten,
    label : 'Ramda',
  },
  {
    fn    : _.flattenDeep,
    label : 'Lodash',
  },
]

module.exports = {
  applyBenchmark : applyBenchmarkUnary,
  modes,
  tests,
}
