const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const addFourNumbers = (a, b, c, d) => a + b + c + d

const curryN = [
  {
    label: 'Rambda',
    fn: () => {
      const curriedAddFourNumbers = R.curryN(4, addFourNumbers)
      const f = curriedAddFourNumbers(1, 2)
      const g = f(3)

      g(4)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const curriedAddFourNumbers = Ramda.curryN(4, addFourNumbers)
      const f = curriedAddFourNumbers(1, 2)
      const g = f(3)

      g(4)
    },
  },
]

module.exports = curryN
