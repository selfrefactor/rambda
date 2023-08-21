const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const input = {
  a : 1,
  b : 2,
}

const clone = [
  {
    fn : () => {
      R.clone(input)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.clone(input)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.cloneDeep(input)
    },
    label : 'Lodash.cloneDeep',
  },
]

module.exports = clone
