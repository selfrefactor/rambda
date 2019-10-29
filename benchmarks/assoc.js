const _ = require('lodash')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const input = { a: 1, b: 2 }
const key = 'c'
const value = 3

const assoc = [
  {
    label : 'Rambda',
    fn    : () => {
      R.assoc(key, value, input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.assoc(key, value, input)
    },
  },
  {
    label : 'Lodash.set',
    fn    : () => {
      _.set(input, key, value)
    },
  },
]

module.exports = assoc