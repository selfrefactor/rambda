const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const { listOfVariousTypes } = require('./_utils')

const limit = 1000

function applyBenchmark(fn){
  listOfVariousTypes.forEach(mode => {
    Array(limit)
      .fill(mode)
      .forEach(x => fn(x))
  })
}

const test = [
  {
    fn : () => {
      applyBenchmark(R.type)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      applyBenchmark(Ramda.type)
    },
    label : 'Ramda',
  },
]

module.exports = test
