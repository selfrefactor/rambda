const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {listOfVariousTypes} = require('./_utils')

const limit = 1000

function applyBenchmark(fn) {
  listOfVariousTypes.forEach(mode => {
    Array(limit)
      .fill(mode)
      .forEach(x => fn(x))
  })
}

const test = [
  {
    label: 'Rambda',
    fn: () => {
      applyBenchmark(R.type)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      applyBenchmark(Ramda.type)
    },
  },
]

module.exports = test
