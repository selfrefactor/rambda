const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const test = [
  {
    fn : () => {
      R.test(/\s/g, 'x y z')
      R.test(/\s/g)('x y z')
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.test(/\s/g, 'x y z')
      Ramda.test(/\s/g)('x y z')
    },
    label : 'Ramda',
  },
]

module.exports = test
