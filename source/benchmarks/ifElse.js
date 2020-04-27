const R = require('../../dist/rambda.js')
const Ramda = require('ramda')

const condition = R.has('foo')
const v = function (a){
  return typeof a === 'number'
}
const t = function (a){
  return a + 1
}
const ifFn = x => R.prop('foo', x).length
const elseFn = () => false

const ifElse = [
  {
    label : 'Rambda',
    fn    : () => {
      const fn = R.ifElse(condition, ifFn)(elseFn)

      fn({ foo : 'bar' })
      fn({ fo : 'bar' })

      const ifIsNumber = R.ifElse(v)
      ifIsNumber(t, R.identity)(15)
      ifIsNumber(t, R.identity)('hello')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      const fn = Ramda.ifElse(condition, ifFn)(elseFn)

      fn({ foo : 'bar' })
      fn({ fo : 'bar' })

      const ifIsNumber = Ramda.ifElse(v)
      ifIsNumber(t, R.identity)(15)
      ifIsNumber(t, R.identity)('hello')
    },
  },
]

module.exports = ifElse
