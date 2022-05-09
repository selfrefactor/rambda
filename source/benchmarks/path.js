const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const obj = { a : { b : 2 } }
const pathInput = [ 'a', 'b' ]

const path = [
  {
    label : 'Rambda',
    fn    : () => {
      R.path(pathInput, obj)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.path(pathInput, obj)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.get(obj, pathInput)
    },
  },
]

module.exports = path
