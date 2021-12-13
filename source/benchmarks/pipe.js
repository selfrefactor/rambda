const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const _ = require('lodash')
const {
  uniqListOfStrings
} = require('./_utils.js')

const modes = [
  [val => val + 1, val => val.length],
  [x => x.toUpperCase(), x => x.toLowerCase(),x => `${x}-foo`,x => x+1, x => x.length, x => x.join('---')],
  {special: true, fns: [x => x.toUpperCase(), x => x.toLowerCase(), (firstName, lastName) =>
    "The name's " + lastName + ", " + firstName + " " + lastName]}
]

const applyBenchmark = (fn, input) => {
  if(input.special) {
    return fn(...input.fns.reverse())(`foo`, `bar`)
  }
  return fn(...input.reverse())(uniqListOfStrings(100))
}

const tests = [
  {
    label: 'Rambda',
    fn: R.pipe,
  },
  {
    label: 'Ramda',
    fn: Ramda.pipe,
  },
  {
    label: 'Lodash',
    fn: _.flowLeft,
  },
]

module.exports = {tests, applyBenchmark, modes}
