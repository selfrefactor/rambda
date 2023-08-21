const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const fn = x => x > 2
const list = [ 1, 2, 3, 4 ]

const findIndex = [
  {
    fn : () => {
      R.findIndex(fn, list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.findIndex(fn, list)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.findIndex(list, fn)
    },
    label : 'Lodash',
  },
]

module.exports = findIndex
