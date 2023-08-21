const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, 2, 3, 4 ]
const num = 2

const takeLast = [
  {
    fn : () => {
      R.takeLast(num, list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.takeLast(num, list)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.takeRight(list, num)
    },
    label : 'Lodash',
  },
]

module.exports = takeLast
