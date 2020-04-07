const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const list = [ 'foo', 'bar', 'baz' ]
const fn = (a, b) => a > b ? -1 : 1

const replace = [
  {
    label : 'Rambda',
    fn    : () => {
      R.sort(fn, list)
      R.sort(fn)(list)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.sort(fn, list)
      Ramda.sort(fn)(list)
    },
  },
]

module.exports = replace
