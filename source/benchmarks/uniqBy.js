const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfNumbers,
  uniqListOfLists,
  uniqListOfObjects,
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
    label : 'Rambda',
    fn    : R.uniqBy,
  },
  {
    label : 'Ramda',
    fn    : Ramda.uniqBy,
  },
]

module.exports = {
  tests,
  modes,
  applyBenchmark,
}
