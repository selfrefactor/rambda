const _ = require('lodash')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 4, 1, 3, 5, 4, 2, 3, 4 ]

const uniq = [
  {
    label : 'Rambda',
    fn    : () => {
      R.uniq(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.uniq(list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.uniq(list)
    },
  },
]

module.exports = uniq
