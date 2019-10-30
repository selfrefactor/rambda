const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const input = [ 1, 2, 3, 4 ]

const drop = [
  {
    label : 'Rambda',
    fn    : () => {
      const result = R.drop(3, input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const result = Ramda.drop(3, input)
    },
  },
]

module.exports = drop
