const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const input = [ 1, 2, 3, 4 ]
const fn = val => val > 2

const any = [
  {
    fn : () => {
      R.any(fn, input)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.any(fn, input)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.some(input, fn)
    },
    label : 'Lodash.some',
  },
]

module.exports = any
