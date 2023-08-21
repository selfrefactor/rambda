const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const replace = [
  {
    fn : () => {
      R.replace(
        /\s/g, '|', 'foo bar baz'
      )
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.replace(
        /\s/g, '|', 'foo bar baz'
      )
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.replace(
        'foo bar baz', /\s/g, '|'
      )
    },
    label : 'Lodash',
  },
]

module.exports = replace
