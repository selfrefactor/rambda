const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const arr = [ 1, 2, 3, 4 ]
const fn = x => x * 2
const map = [
  {
    fn : () => {
      R.map(fn, arr)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.map(fn, arr)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.map(arr, fn)
    },
    label : 'Lodash',
  },
]

module.exports = map
