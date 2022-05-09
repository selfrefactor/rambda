const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const append = [
  {
    label : 'Rambda',
    fn    : () => {
      R.append(0)([ 1, 2, 3, 4 ])
      R.append('bar')('foo')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.append(0)([ 1, 2, 3, 4 ])
      Ramda.append('bar')('foo')
    },
  },
]

module.exports = append
