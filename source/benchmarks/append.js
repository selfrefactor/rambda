const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const append = [
  {
    fn : () => {
      R.append(0)([ 1, 2, 3, 4 ])
      R.append('bar')('foo')
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.append(0)([ 1, 2, 3, 4 ])
      Ramda.append('bar')('foo')
    },
    label : 'Ramda',
  },
]

module.exports = append
