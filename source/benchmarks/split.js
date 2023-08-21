const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const str = 'foo|bar|baz'
const sep = '|'

const split = [
  {
    fn : () => {
      R.split(sep, str)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.split(sep, str)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.split(str, sep)
    },
    label : 'Lodash',
  },
]

module.exports = split
