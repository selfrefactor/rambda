const _ = require('lodash')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const input = {
  a : 1,
  b : 2,
}

const clone = [
  {
    label : 'Rambda',
    fn    : () => {
      R.clone(input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.clone(input)
    },
  },
  {
    label : 'Lodash.cloneDeep',
    fn    : () => {
      _.cloneDeep(input)
    },
  },
]

module.exports = clone
