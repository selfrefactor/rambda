const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const obj = {
  a : 'foo',
  b : 'bar',
  c : 'baz',
}
const pickInput = [ 'a', 'c' ]
const pick = [
  {
    fn : () => {
      R.pick(pickInput, obj)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.pick(pickInput, obj)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.pick(obj, pickInput)
    },
    label : 'Lodash',
  },
]

module.exports = pick
