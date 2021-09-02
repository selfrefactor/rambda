const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const testObj = {a: 1}

const last = [
  {
    label: 'Rambda',
    fn: () => {
      R.view(R.lensProp('a'), testObj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.view(Ramda.lensProp('a'), testObj)
    },
  },
]

module.exports = last
