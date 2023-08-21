const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 1, 2, 3, 4 ]
const num = 2

const take = [
  {
    fn : () => {
      R.take(num, list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.take(num, list)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.take(list, num)
    },
    label : 'Lodash',
  },
]

module.exports = take
