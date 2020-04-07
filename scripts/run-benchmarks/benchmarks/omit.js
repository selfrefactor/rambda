const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const obj = {
  a : 'foo',
  b : 'bar',
  c : 'baz',
}
const toOmit = [ 'a', 'c' ]
const omit = [
  {
    label : 'Rambda',
    fn    : () => {
      R.omit(toOmit, obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.omit(toOmit, obj)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.omit(obj, toOmit)
    },
  },
]

module.exports = omit
