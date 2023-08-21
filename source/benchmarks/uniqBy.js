const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  uniqListOfBooleans,
  uniqListOfLists,
  uniqListOfNumbers,
  uniqListOfObjects,
  uniqListOfStrings,
} = require('./_utils.js')

const limit = 100

const modes = [
  [ R.length, uniqListOfStrings(limit) ],
  [ x => Boolean(x), uniqListOfBooleans(limit) ],
  [ x => x > 50, uniqListOfNumbers(limit) ],
  [ R.length, uniqListOfLists(limit) ],
  [ x => Boolean(x.foo), uniqListOfObjects(limit) ],
]

function applyBenchmark(uniqBy, [ fn, input ]){
  uniqBy(fn, input)
}

const tests = [
  {
    fn    : R.uniqBy,
    label : 'Rambda',
  },
  {
    fn    : Ramda.uniqBy,
    label : 'Ramda',
  },
]

module.exports = {
  applyBenchmark,
  modes,
  tests,
}
