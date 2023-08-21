const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const input = [ 1, 2, 3, 4 ]

const drop = [
  {
    fn : () => {
      R.drop(3, input)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.drop(3, input)
    },
    label : 'Ramda',
  },
]

module.exports = drop
