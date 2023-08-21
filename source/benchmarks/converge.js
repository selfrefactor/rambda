const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const converge = [
  {
    fn : () => {
      const fn = Ramda.converge(Ramda.multiply, [ Ramda.add(1), Ramda.add(3) ])

      fn(4)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      const fn = R.converge(R.multiply, [ R.add(1), R.add(3) ])

      fn(4)
    },
    label : 'Ramda',
  },
]

module.exports = converge
