const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const is = [
  {
    fn : () => {
      R.is(Array, undefined)
      R.is(Array)([])
      R.is(Boolean, new Boolean(false))
      R.is(Date, new Date())
      R.is(Function, () => {})
      R.is(Number, new Number(0))
      R.is(Object, {})
      R.is(RegExp, /(?:)/)
      R.is(String, new String(''))
    },
    label : 'Rambda',
  },
  {
    fn : () => {
      Ramda.is(Array, undefined)
      Ramda.is(Array)([])
      Ramda.is(Boolean, new Boolean(false))
      Ramda.is(Date, new Date())
      Ramda.is(Function, () => {})
      Ramda.is(Number, new Number(0))
      Ramda.is(Object, {})
      Ramda.is(RegExp, /(?:)/)
      Ramda.is(String, new String(''))
    },
    label : 'Ramda',
  },
]

module.exports = is
