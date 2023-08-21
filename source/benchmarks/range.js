const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const start = 12
const end = 22
const range = [
  {
    fn : () => {
      R.range(start, end)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.range(start, end)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.range(start, end)
    },
    label : 'Lodash',
  },
]

module.exports = range
