const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const input = [null, undefined, 5]

const defaultTo = [
  {
    label: 'Rambda',
    fn: () => {
      R.defaultTo(3, input[0])
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.defaultTo(3, input[0])
    },
  },
  {
    label: 'Rambda with multiple arguments',
    fn: () => {
      R.defaultTo(3, ...input)
    },
  },
]

module.exports = defaultTo
