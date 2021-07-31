const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const { uniqListOfString, uniqListOfBooleans, uniqListOfNumbers, uniqListOfLists, uniqListOfObjects, applyBenchmarkFn } = require('./_utils.js')

const INDEX = -1
const limit = 100

const modes = [
  [uniqListOfString(limit), 'Rambda'],
  [uniqListOfBooleans(limit), null],
  [uniqListOfNumbers(limit), -2],
  [uniqListOfLists(limit), [1]],
  [uniqListOfObjects(limit), { a: 1 }],
]

function applyBenchmark(fn){
  const singleFn = ([list, target]) => fn(target, list)
  applyBenchmarkFn(modes, INDEX, singleFn)
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
