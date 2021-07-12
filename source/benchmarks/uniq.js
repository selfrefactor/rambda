const _ = require('lodash')
const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const mode = 0
const limit = 10000

let strings = R.map(() => Math.floor(Math.random() * 1000) + "", R.range(0,limit))

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
