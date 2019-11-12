const _ = require('lodash')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const target = 4
const list = [ 1, 2, 3, 4 ]

const indexOf = [
  {
    label : 'Rambda',
    fn    : () => {
      R.indexOf(target, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.indexOf(target, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.indexOf(list, target)
    },
  },
]

module.exports = indexOf
