const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const key = 'foo'
const value = 42

const assoc = [
  {
    fn : () => {
      R.objOf(key, value)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.objOf(key, value)
    },
    label : 'Ramda',
  },
]

module.exports = assoc
