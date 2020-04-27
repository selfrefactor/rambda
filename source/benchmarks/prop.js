const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const obj = {
  a : { c : 2 },
  b : 1,
}
const propInput = 'b'

const prop = [
  {
    label : 'Rambda',
    fn    : () => {
      R.prop(propInput, obj)
      R.prop(propInput)(obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.prop(propInput, obj)
      Ramda.prop(propInput)(obj)
    },
  },
]

module.exports = prop
