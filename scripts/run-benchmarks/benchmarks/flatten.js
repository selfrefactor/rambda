const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, [ 2, [ 3, 4, 6 ] ] ]

const flatten = [
  {
    label : 'Rambda',
    fn    : () => {
      R.flatten(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.flatten(list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.flatten(list)
    },
  },
]

module.exports = flatten
