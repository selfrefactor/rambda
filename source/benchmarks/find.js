const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const fn = x => x > 2
const list = [ 1, 2, 3, 4 ]

const find = [
  {
    fn : () => {
      R.find(fn, list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.find(fn, list)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.find(list, fn)
    },
    label : 'Lodash',
  },
]

module.exports = find
