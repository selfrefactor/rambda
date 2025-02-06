const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfObjects,
  uniqListOfLists,
  listOfVariousTypes,
  rangeOfNumbers,
} = require('./_utils.js')

const limit = 100
const additionalModes = listOfVariousTypes.map(unknownType => [
  unknownType,
  uniqListOfLists(limit),
])

const modes = [
  [99, rangeOfNumbers(limit)],
  [200, rangeOfNumbers(limit)],
  ...additionalModes,
  ['zeppelin', uniqListOfStrings(limit)],
  [null, uniqListOfBooleans(limit)],
  [
    {
      foo: true,
      bar: true,
    },
    uniqListOfObjects(limit),
  ],
  [1, uniqListOfLists(limit)],
  [[1], uniqListOfLists(limit)],
]

function applyBenchmark(fn, input) {
  return fn(input[0], input[1])
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

module.exports = {
  tests,
  modes,
  applyBenchmark,
}
