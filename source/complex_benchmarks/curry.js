const R = require('../../dist/rambda')
const Ramda = require('ramda')

const ramdaLong = {
  label: 'Ramda',
  fn: () => {
    const addNumbers = (a, b, c, d, e, f, g, h, i) =>
      a + b + c + d + e + f + g + h + i
    const curried = Ramda.curry(addNumbers)

    const f = curried(1, 2, 3)
    const g = f(4, 5, 6)

    return () => g(7, 8, 9)
  },
}

const rambdaLong = {
  label: 'Rambda',
  fn: () => {
    const addNumbers = (a, b, c, d, e, f, g, h, i) =>
      a + b + c + d + e + f + g + h + i
    const curried = R.curry(addNumbers)

    const f = curried(1, 2, 3)
    const g = f(4, 5, 6)

    return () => g(7, 8, 9)
  },
}

const ramdaShort = {
  label: 'Ramda',
  fn: () => {
    const addNumbers = (a, b) => a + b
    const curried = Ramda.curry(addNumbers)

    const f = curried(1)

    return () => f(2)
  },
}

const rambdaShort = {
  label: 'Rambda',
  fn: () => {
    const addNumbers = (a, b) => a + b
    const curried = R.curry(addNumbers)

    const f = curried(1)

    return () => f(2)
  },
}

module.exports = [
  {
    label: 'curry',
    suites: [rambdaShort, ramdaShort],
  },
  {
    label: 'curry#many.arguments',
    suites: [rambdaLong, ramdaShort],
  },
]
