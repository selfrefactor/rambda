const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const adjust = [
  {
    label : 'Rambda',
    fn    : () => {
      R.adjust(val => val + 1, 0)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.adjust(val => val + 1, 0)
    },
  },
]
module.exports = adjust
