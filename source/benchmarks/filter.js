const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const arr = [ 1, 2, 3, 4 ]
const fn = x => x > 2
const filter = [
  {
    label : 'Rambda',
    fn    : () => {
      R.filter(fn, arr)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.filter(fn, arr)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.filter(arr, fn)
    },
  },
]

module.exports = filter
