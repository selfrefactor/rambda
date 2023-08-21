const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  rangeOfNumbers,
  uniqListOfLists,
  uniqListOfObjects,
  uniqListOfStrings,
} = require('./_utils.js')

const limit = 100

const modes = [
  [ uniqListOfObjects(limit), x => Object.keys(x).length > 2 ],
  [ uniqListOfStrings(limit), x => x.length > 0 ],
  [ uniqListOfLists(limit), x => x.length > 0 ],
  [ rangeOfNumbers(limit), x => x > -1 ],
]

const applyBenchmark = (fn, input) => fn(input[ 1 ], input[ 0 ])

const tests = [
  {
    fn    : R.all,
    label : 'Rambda',
  },
  {
    fn    : Ramda.all,
    label : 'Ramda',
  },
]

module.exports = {
  applyBenchmark,
  modes,
  tests,
}
