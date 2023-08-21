const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const obj = {
  a : 'foo',
  b : 'bar',
  c : 'baz',
}
const toOmit = [ 'a', 'c' ]
const omit = [
  {
    fn : () => {
      R.omit(toOmit, obj)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.omit(toOmit, obj)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.omit(obj, toOmit)
    },
    label : 'Lodash',
  },
]

module.exports = omit
