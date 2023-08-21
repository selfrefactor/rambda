const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const isEven = n => n % 2 === 0
const arr = [ 1, 3, 5, 7, 9, 11 ]

const none = [
  {
    fn : () => {
      R.none(isEven, arr)
      R.none(isEven)(arr)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.none(isEven, arr)
      Ramda.none(isEven)(arr)
    },
    label : 'Ramda',
  },
]

module.exports = none
