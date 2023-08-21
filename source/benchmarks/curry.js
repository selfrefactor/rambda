const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const addFourNumbers = (
  a, b, c, d
) => a + b + c + d

const curry = [
  {
    fn : () => {
      const curriedAddFourNumbers = R.curry(addFourNumbers)
      const f = curriedAddFourNumbers(1, 2)
      const g = f(3)

      g(4)
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      const curriedAddFourNumbers = Ramda.curry(addFourNumbers)
      const f = curriedAddFourNumbers(1, 2)
      const g = f(3)

      g(4)
    },
    label : 'Ramda',
  },
]

module.exports = curry
