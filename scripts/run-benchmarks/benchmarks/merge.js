const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const obj = { bar : 'yes' }
const a = {
  foo : 'bar',
  bar : 'baz',
}
const merge = [
  {
    label : 'Rambda',
    fn    : () => {
      R.merge(a, obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.merge(a, obj)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.merge(a, obj)
    },
  },
]

module.exports = merge
