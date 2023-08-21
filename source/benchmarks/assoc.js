const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const input = {
  a : 1,
  b : 2,
}
const key = 'c'
const value = 3

const assoc = [
  {
    fn : () => {
      R.assoc(
        key, value, input
      )
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.assoc(
        key, value, input
      )
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      _.set(
        input, key, value
      )
    },
    label : 'Lodash.set',
  },
]

module.exports = assoc
