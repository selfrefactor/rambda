const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const obj = { bar : 'yes' }
const a = {
  bar : 'baz',
  foo : 'bar',
}
const merge = [
  {
    fn : () => {
      R.merge(a, obj)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.merge(a, obj)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.merge(a, obj)
    },
    label : 'Lodash',
  },
]

module.exports = merge
