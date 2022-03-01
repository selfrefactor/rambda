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
  [ uniqListOfStrings(limit), 'Rambda' ],
  [ uniqListOfBooleans(limit), null ],
  [ uniqListOfNumbers(limit), -2 ],
  [ uniqListOfLists(limit), [ 1 ] ],
  [ uniqListOfObjects(limit), { a : 1 } ],
]

function applyBenchmark(fn, input){
  fn(input[ 1 ], input[ 0 ])
}

const tests = [
  {
    label : 'Rambda',
    fn    : R.indexOf,
  },
  {
    label : 'Ramda',
    fn    : Ramda.indexOf,
  },
]

module.exports = {
  tests,
  modes,
  applyBenchmark,
}
