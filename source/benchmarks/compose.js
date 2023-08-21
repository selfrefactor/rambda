const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const { uniqListOfStrings } = require('./_utils.js')

const modes = [
  [ val => val + 1, val => val.length ],
  [
    x => x.toUpperCase(),
    x => x.toLowerCase(),
    x => `${ x }-foo`,
    x => x + 1,
    x => x.length,
    x => x.join('---'),
  ],
  {
    fns : [
      x => x.toUpperCase(),
      x => x.toLowerCase(),
      (firstName, lastName) =>
        'The name\'s ' + lastName + ', ' + firstName + ' ' + lastName,
    ],
    special : true,
  },
]

const applyBenchmark = (fn, input) => {
  if (input.special) return fn(...input.fns)('foo', 'bar')

  return fn(...input)(uniqListOfStrings(100))
}

const tests = [
  {
    fn    : R.compose,
    label : 'Rambda',
  },
  {
    fn    : Ramda.compose,
    label : 'Ramda',
  },
  {
    fn    : _.flowRight,
    label : 'Lodash',
  },
]

module.exports = {
  applyBenchmark,
  modes,
  tests,
}
