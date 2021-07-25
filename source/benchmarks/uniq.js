const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const mode = 0
const limit = 10000

const strings = Array(limit).fill('').map(() => String(Math.floor(Math.random() * 1000)))

const modes = [
  strings
]
const activeMode = modes[mode]

const uniq = [
  {
    label : 'Rambda',
    fn    : () => {
      R.uniq(activeMode)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.uniq(activeMode)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.uniq(activeMode)
    },
  },
]

module.exports = uniq
