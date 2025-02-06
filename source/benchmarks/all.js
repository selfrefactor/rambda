const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  uniqListOfObjects,
  uniqListOfStrings,
  rangeOfNumbers,
  uniqListOfLists,
} = require('./_utils.js')

const limit = 100

const modes = [
  [uniqListOfObjects(limit), x => Object.keys(x).length > 2],
  [uniqListOfStrings(limit), x => x.length > 0],
  [uniqListOfLists(limit), x => x.length > 0],
  [rangeOfNumbers(limit), x => x > -1],
]

const applyBenchmark = (fn, input) => fn(input[1], input[0])

const tests = [
  {
    label: 'Rambda',
    fn: R.all,
  },
  {
    label: 'Ramda',
    fn: Ramda.all,
  },
]

module.exports = {
  tests,
  applyBenchmark,
  modes,
}
