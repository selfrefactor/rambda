const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const replace = [
  {
    label : 'Rambda',
    fn    : () => {
      R.replace(/\s/g, '|', 'foo bar baz')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.replace(/\s/g, '|', 'foo bar baz')
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.replace('foo bar baz', /\s/g, '|')
    },
  },
]

module.exports = replace
