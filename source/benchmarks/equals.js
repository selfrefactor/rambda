const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const mode = 0
const limit = 10000

const strings = Array(limit).fill(null).map(() => Math.floor(Math.random() * 1000))

const modes = [
  strings
]
const activeMode = modes[mode]

const equals = [
  {
    label : 'Rambda',
    fn    : () => {
      activeMode.forEach(x => R.equals(x,'ss' ))
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      activeMode.forEach(x => Ramda.equals(x,'ss' ))
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      activeMode.forEach(x => _.isEqual(x,'ss' ))
    },
  },
]

module.exports = equals
