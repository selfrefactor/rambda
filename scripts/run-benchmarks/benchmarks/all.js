const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const input = [ 1, 2, 3, 4 ]

const all = [
  {
    label : 'Rambda',
    fn    : () => {
      const fn = x => x > 2

      R.all(fn, input)
      R.all(fn)(input)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const fn = x => x > 2

      Ramda.all(fn, input)
      Ramda.all(fn)(input)
    },
  },
]

module.exports = all
