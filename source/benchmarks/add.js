const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const add = [
  {
    fn : () => {
      R.add(1, 1)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.add(1, 1)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.add(1, 1)
    },
    label : 'Lodash',
  },
]

module.exports = add
