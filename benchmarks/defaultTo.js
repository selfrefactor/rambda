const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const input = [ null, undefined, 5 ]

const defaultTo = [
  {
    label : 'Rambda',
    fn    : () => {
      const result = R.defaultTo(3, input[ 0 ])
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const result = Ramda.defaultTo(3, input[ 0 ])
    },
  },
  {
    label : 'Rambda with multiple arguments',
    fn    : () => {
      const result = R.defaultTo(3, ...input)
    },
  },
]

module.exports = defaultTo
