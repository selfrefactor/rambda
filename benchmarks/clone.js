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
      const cloned = R.clone(input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const cloned = Ramda.clone(input)
    },
  },
  {
    label : 'Lodash.cloneDeep',
    fn    : () => {
      const cloned = _.cloneDeep(input)
    },
  },
]

module.exports = clone
