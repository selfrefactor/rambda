const _ = require('lodash')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const a = { a : { b : { c : 1 } } }
const b = { a : { b : { c : 1 } } }

const equals = [
  {
    label : 'Rambda',
    fn    : () => {
      const result = R.equals(a, b)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const result = Ramda.equals(a, b)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      const result = _.isEqual(a, b)
    },
  },
]

module.exports = equals
