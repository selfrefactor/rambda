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

const uniqWith = [
  {
    label: 'Rambda',
    fn: () => {
      modes.forEach(([mode, fn]) => {
        R.uniqWith(fn, mode)
      })
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      modes.forEach(([mode, fn]) => {
        Ramda.uniqWith(fn, mode)
      })
    },
  },
]

module.exports = uniqWith
