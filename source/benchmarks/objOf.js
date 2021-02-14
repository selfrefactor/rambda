const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const key = 'foo'
const value = 42

const assoc = [
  {
    label : 'Rambda',
    fn    : () => {
      R.objOf(
        key, value
      )
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.objOf(
        key, value
      )
    },
  },
]

module.exports = assoc
