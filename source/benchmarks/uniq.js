const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfNumbers,
  uniqListOfLists,
  uniqListOfObjects,
} = require('./_utils.js')

const limit = 100

const modes = [
  uniqListOfStrings(limit),
  uniqListOfBooleans(limit),
  uniqListOfNumbers(limit),
  uniqListOfLists(limit),
  uniqListOfObjects(limit),
]

function applyBenchmark(fn, input) {
  fn(input)
}

const tests = [
  {
    label: 'Rambda',
    fn: R.uniq,
  },
  {
    label: 'Ramda',
    fn: Ramda.uniq,
  },
]

module.exports = {
  tests,
  modes,
  applyBenchmark,
}
