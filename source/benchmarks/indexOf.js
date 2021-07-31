const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const { uniqListOfString, uniqListOfBooleans, uniqListOfNumbers, uniqListOfLists, uniqListOfObjects } = require('./_utils.js')

const limit = 100

const modes = [
  [uniqListOfString(limit), 'Rambda'],
  [uniqListOfBooleans(limit), null],
  [uniqListOfNumbers(limit), -2],
  [uniqListOfLists(limit), [1]],
  [uniqListOfObjects(limit), { a: 1 }],
]

const applyBenchmark = (fn) => {
  modes.forEach(( [list, target] ) => {
    fn(target, list)
  })
}

const indexOf = [
  {
    label : 'Rambda',
    fn    : () => {
      applyBenchmark(R.indexOf)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      applyBenchmark(Ramda.indexOf)
    },
  },
]

module.exports = indexOf
