const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const input = [ 1, 2, 3, 4 ]

const dropLast = [
  {
    fn : () => {
      R.dropLast(3, input)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.dropLast(3, input)
    },
    label : 'Ramda',
  },
]

module.exports = dropLast
