const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, 2, 3, 4 ]
const num = 2

const take = [
  {
    label : 'Rambda',
    fn    : () => {
      R.take(num, list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.take(num, list)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.take(list, num)
    },
  },
]

module.exports = take
