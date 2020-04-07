const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const isEven = n => n % 2 === 0
const arr = [ 1, 3, 5, 7, 9, 11 ]

const lastIndexOf = [
  {
    label : 'Rambda',
    fn    : () => {
      R.lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
      R.lastIndexOf(1)([ 1, 2, 3, 1, 2 ])
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
      Ramda.lastIndexOf(1)([ 1, 2, 3, 1, 2 ])
    },
  },
]

module.exports = lastIndexOf
