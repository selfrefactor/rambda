const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const obj = { a : { b : 2 } }
const pathInput = [ 'a', 'b' ]

const path = [
  {
    fn : () => {
      R.path(pathInput, obj)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.path(pathInput, obj)
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.get(obj, pathInput)
    },
    label : 'Lodash',
  },
]

module.exports = path
