const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const { uniqListOfString, uniqListOfBooleans, uniqListOfNumbers, uniqListOfLists, uniqListOfObjects, applyBenchmarkFn } = require('./_utils.js')

const limit = 100

const INDEX = -1

const modes = [
  uniqListOfString(limit),
  uniqListOfBooleans(limit),
  uniqListOfNumbers(limit),
  uniqListOfLists(limit),
  uniqListOfObjects(limit),
]

function applyBenchmark(fn){
  const singleFn = x => fn(x)
  const allFn = list => list.forEach(x => fn(x))
  applyBenchmarkFn(modes, INDEX, singleFn, allFn)
}

const uniq = [
  {
    label : 'Rambda',
    fn    : () => {
      applyBenchmark(R.uniq)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      applyBenchmark(Ramda.uniq)
    },
  },
]

module.exports = uniq
