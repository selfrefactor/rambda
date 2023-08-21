const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ { a : 2 }, { a : 1 }, { a : 0 } ]
const fn = x => x.a

const replace = [
  {
    fn : () => {
      R.sortBy(fn, list)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.sortBy(fn, list)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.sortBy(list, fn)
    },
    label : 'Lodash',
  },
]

module.exports = replace
