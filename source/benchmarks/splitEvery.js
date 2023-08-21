const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, 2, 3, 4, 5, 6, 7 ]

const splitEvery = [
  {
    fn : () => {
      R.splitEvery(3, list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.splitEvery(3, list)
    },
    label : 'Ramda',
  },
]

module.exports = splitEvery
