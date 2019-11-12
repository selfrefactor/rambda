const _ = require('lodash')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const fn = x => x > 2
const list = [ 1, 2, 3, 4 ]

const findIndex = [
  {
    label : 'Rambda',
    fn    : () => {
      R.findIndex(fn, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.findIndex(fn, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.findIndex(list, fn)
    },
  },
]

module.exports = findIndex
