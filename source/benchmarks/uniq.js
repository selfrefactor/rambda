const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  uniqListOfBooleans,
  uniqListOfLists,
  uniqListOfNumbers,
  uniqListOfObjects,
  uniqListOfStrings,
} = require('./_utils.js')

const limit = 100

const modes = [
  uniqListOfStrings(limit),
  uniqListOfBooleans(limit),
  uniqListOfNumbers(limit),
  uniqListOfLists(limit),
  uniqListOfObjects(limit),
]

function applyBenchmark(fn, input){
  fn(input)
}

const tests = [
  {
    fn    : R.uniq,
    label : 'Rambda',
  },
  {
    fn    : Ramda.uniq,
    label : 'Ramda',
  },
]

module.exports = {
  applyBenchmark,
  modes,
  tests,
}
