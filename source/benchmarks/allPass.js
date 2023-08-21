const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const { random } = require('rambdax')

const limit = 100
const min = 10
const max = 1200
function createListOfFunctions(fn, fnLimit){
  return Array(fnLimit)
    .fill(null)
    .map(() => fn())
}

const modes = [
  [
    { foo : 1500 },
    createListOfFunctions(() => x => Number(x.foo) > random(min, max),
      limit),
  ],
  [
    '1500',
    createListOfFunctions(() => x => Number(x) > random(min, max), limit),
  ],
  [
    [ 1, 2, 1500 ],
    createListOfFunctions(() => x => x[ 2 ] > random(min, max), limit),
  ],
  [ 1500, createListOfFunctions(() => x => x > random(min, max), limit) ],
]

const applyBenchmark = (fn, input) => fn(input[ 1 ])(input[ 0 ])
const tests = [
  {
    fn    : R.allPass,
    label : 'Rambda',
  },
  {
    fn    : Ramda.allPass,
    label : 'Ramda',
  },
]

module.exports = {
  applyBenchmark,
  modes,
  tests,
}
