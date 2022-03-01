const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const { uniqListOfStrings } = require('./_utils.js')

const modes = [
  [ val => val.length, val => val + 1 ],
  [
    x => x.join('---'),
    x => x.length,
    x => x + 1,
    x => `${ x }-foo`,
    x => x.toLowerCase(),
    x => x.toUpperCase(),
  ],
  {
    special : true,
    fns     : [
      (firstName, lastName) =>
        'The name\'s ' + lastName + ', ' + firstName + ' ' + lastName,
      x => x.toUpperCase(),
      x => x.toLowerCase(),
    ],
  },
]

const applyBenchmark = (fn, input) => {
  if (input.special){
    return fn(...input.fns)('foo', 'bar')
  }

  return fn(...input)(uniqListOfStrings(100))
}

const tests = [
  {
    label : 'Rambda',
    fn    : Ramda.pipe,
  },
  {
    label : 'Ramda',
    fn    : Ramda.pipe,
  },
  // {
  //   label: 'Lodash',
  //   fn: _.flow,
  // },
]

module.exports = {
  tests,
  applyBenchmark,
  modes,
}
