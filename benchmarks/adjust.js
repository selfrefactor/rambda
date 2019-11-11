const R = require('../dist/rambda.js')
const Ramda = require('ramda')

const adjust = [
  {
    label : 'Rambda',
    fn    : () => {
      R.adjust(1, x => x + 1, [ 0, 1, 2 ])
      R.adjust(1, x => x + 1)([ 0, 1, 2 ])
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.adjust(1, x => x + 1, [ 0, 1, 2 ])
      Ramda.adjust(1, x => x + 1)([ 0, 1, 2 ])
    },
  },
]

module.exports = adjust
