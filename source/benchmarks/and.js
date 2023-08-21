const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const and = [
  {
    fn : () => {
      R.and(true, true)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.and(true, true)
    },
    label : 'Ramda',
  },
]

module.exports = and
