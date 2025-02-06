const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const { uniqListOfStrings, applyBenchmarkUnary } = require('./_utils.js')

const modes = [
  [1, [2, [3, 4, 6]]],
  uniqListOfStrings,
  [],
  [{ a: [1, 2] }, [], [{ a: [1, 2] }, []]],
  Array(1000).fill([1, [2, [3, 4, 6]]]),
  Array(1000).fill([[]]),
]

const tests = [
  {
    label: 'Rambda',
    fn: R.flatten,
  },
  {
    label: 'Ramda',
    fn: Ramda.flatten,
  },
  {
    label: 'Lodash',
    fn: _.flattenDeep,
  },
]

module.exports = {
  tests,
  applyBenchmark: applyBenchmarkUnary,
  modes,
}
