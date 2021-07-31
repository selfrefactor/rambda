const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const { uniqListOfString, uniqListOfBooleans, uniqListOfNumbers, uniqListOfLists, uniqListOfObjects } = require('./_utils.js')

const limit = 100

const modes = [
  uniqListOfString(limit),
  uniqListOfBooleans(limit),
  uniqListOfNumbers(limit),
  uniqListOfLists(limit),
  uniqListOfObjects(limit),
]

const uniq = [
  {
    label : 'Rambda',
    fn    : () => {
      modes.forEach(mode => {
        R.uniq(mode)
      })
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      modes.forEach(mode => {
        Ramda.uniq(mode)
      })
    },
  },
]

module.exports = uniq
