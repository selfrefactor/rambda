const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, 2, 3, 4 ]

const last = [
  {
    fn : () => {
      R.last(list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.last(list)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.last(list)
    },
    label : 'Lodash',
  },
]

module.exports = last
