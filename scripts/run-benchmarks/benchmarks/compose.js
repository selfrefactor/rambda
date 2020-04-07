const _ = require('lodash')
const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const input = [ 1, 2, 3, 4 ]
const fns = [ val => val + 1, val => val.length ]

const compose = [
  {
    label : 'Rambda',
    fn    : () => {
      R.compose(...fns)(input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.compose(...fns)(input)
    },
  },
  {
    label : 'Lodash.flowRight',
    fn    : () => {
      _.flowRight(...fns)(input)
    },
  },
]

module.exports = compose
