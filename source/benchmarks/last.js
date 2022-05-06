const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, 2, 3, 4 ]

const last = [
  {
    label : 'Rambda',
    fn    : () => {
      R.last(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.last(list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.last(list)
    },
  },
]

module.exports = last
