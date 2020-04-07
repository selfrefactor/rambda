const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const input = [ 1, 2, 3, 4 ]

const dropLast = [
  {
    label : 'Rambda',
    fn    : () => {
      R.dropLast(3, input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.dropLast(3, input)
    },
  },
]

module.exports = dropLast
