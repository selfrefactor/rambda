const R = require('../../../dist/rambda.js')
const Ramda = require('ramda')

const test = [
  {
    label : 'Rambda',
    fn    : () => {
      R.test(/\s/g, 'x y z')
      R.test(/\s/g)('x y z')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.test(/\s/g, 'x y z')
      Ramda.test(/\s/g)('x y z')
    },
  },
]

module.exports = test
