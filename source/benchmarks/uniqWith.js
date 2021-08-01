const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  uniqListOfString,
  uniqListOfBooleans,
  uniqListOfNumbers,
  uniqListOfLists,
  uniqListOfObjects,
} = require('./_utils.js')

const limit = 100

const modes = [
  [uniqListOfString(limit), (x, y) => x.startsWith('o0') && y.length > 2],
  [uniqListOfBooleans(limit), (x, y) => x !== y],
  [
    uniqListOfNumbers(limit),
    (x, y) => (x % 2 === 1 && y % 2 === 1),
  ],
  [uniqListOfLists(limit), (x, y) => x.length !== y.length],
  [uniqListOfObjects(limit), (x, y) => x.a === y.a],
]

function applyBenchmark(fn, input) {
  fn(input[1], input[0])
}

const tests = [
  {
    label: 'Rambda',
    fn: R.uniqWith,
  },
  {
    label: 'Ramda',
    fn: () => Ramda.uniqWith,
  },
]

module.exports = {modes, tests, applyBenchmark}
