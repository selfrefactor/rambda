const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {uniqListOfString, uniqListOfBooleans, uniqListOfObjects, uniqListOfLists, listOfVariousTypes} = require('./_utils.js')

const limit = 100
const additionalModes = listOfVariousTypes.map(unknownType => ([unknownType, uniqListOfLists(limit)]))

const modes = [
  ...additionalModes,
  ['zeppelin', uniqListOfString(limit)],
  [null, uniqListOfBooleans(limit)],
  [{foo: true, bar: true}, uniqListOfObjects(limit)],
  [1, uniqListOfLists(limit)],
  [[1], uniqListOfLists(limit)],
]

function applyBenchmark(fn, input) {
  fn(input[0], input[1])
}

const tests = [
  {
    label: 'Rambda',
    fn: R.includes,
  },
  {
    label: 'Ramda',
    fn: Ramda.includes,
  },
]

module.exports = {tests, modes, applyBenchmark}
