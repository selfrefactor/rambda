const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  listOfVariousTypes,
  rangeOfNumbers,
  uniqListOfBooleans,
  uniqListOfLists,
  uniqListOfObjects,
  uniqListOfStrings,
} = require('./_utils.js')

const limit = 100
const additionalModes = listOfVariousTypes.map(unknownType => [
  unknownType,
  uniqListOfLists(limit),
])

const modes = [
  [ 99, rangeOfNumbers(limit) ],
  [ 200, rangeOfNumbers(limit) ],
  ...additionalModes,
  [ 'zeppelin', uniqListOfStrings(limit) ],
  [ null, uniqListOfBooleans(limit) ],
  [
    {
      bar : true,
      foo : true,
    },
    uniqListOfObjects(limit),
  ],
  [ 1, uniqListOfLists(limit) ],
  [ [ 1 ], uniqListOfLists(limit) ],
]

function applyBenchmark(fn, input){
  return fn(input[ 0 ], input[ 1 ])
}

const tests = [
  {
    fn    : R.includes,
    label : 'Rambda',
  },
  {
    fn    : Ramda.includes,
    label : 'Ramda',
  },
]

module.exports = {
  applyBenchmark,
  modes,
  tests,
}
