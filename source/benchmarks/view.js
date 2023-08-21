const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const testObj = { a : 1 }

const last = [
  {
    fn : () => {
      R.view(R.lensProp('a'), testObj)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.view(Ramda.lensProp('a'), testObj)
    },
    label : 'Ramda',
  },
]

module.exports = last
