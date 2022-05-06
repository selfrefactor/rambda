const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const start = 12
const end = 22
const range = [
  {
    label : 'Rambda',
    fn    : () => {
      R.range(start, end)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.range(start, end)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.range(start, end)
    },
  },
]

module.exports = range
