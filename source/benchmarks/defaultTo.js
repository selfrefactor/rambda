const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const input = [ null, undefined, 5 ]

const defaultTo = [
  {
    fn : () => {
      R.defaultTo(3, input[ 0 ])
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.defaultTo(3, input[ 0 ])
    },
    label : 'Ramda',
  },
  {
    fn : () => {
      R.defaultTo(3, ...input)
    },
    label : 'Rambda with multiple arguments',
  },
]

module.exports = defaultTo
