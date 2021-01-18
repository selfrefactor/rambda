const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const and = [
  {
    label : 'Rambda',
    fn    : () => {
      R.and(true, true)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.and(true, true)
    },
  },
]

module.exports = and
