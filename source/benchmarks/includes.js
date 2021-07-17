const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const mode = 0
const limit = 10000

const strings = Array(limit).fill(null).map(() => String(Math.floor(Math.random() * 1000)))

const modes = [
  strings
]
const activeMode = modes[mode]

const includes = [
  {
    label : 'Rambda',
    fn    : () => {
      R.includes('0', activeMode)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.includes('0', activeMode)
    },
  },
]

module.exports = includes
