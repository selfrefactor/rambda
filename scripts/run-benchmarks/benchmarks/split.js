const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const str = 'foo|bar|baz'
const sep = '|'

const split = [
  {
    label : 'Rambda',
    fn    : () => {
      R.split(sep, str)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.split(sep, str)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.split(str, sep)
    },
  },
]

module.exports = split
