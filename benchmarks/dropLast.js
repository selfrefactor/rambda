const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const input = [ 1, 2, 3, 4 ]

const dropLast = [
  {
    label : 'Rambda',
    fn    : () => {
      const result = R.dropLast(3, input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const result = Ramda.dropLast(3, input)
    },
  },
]

module.exports = dropLast
