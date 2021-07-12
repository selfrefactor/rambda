const R = require('../../dist/rambda.js')
const Ramda = require('ramda')
const fn1 = () => {}
const fn2 = function (){}
function fn3(){}

const mode = 0
const limit = 10000

const modes = [
  new Boolean(true)
]

function applyBenchmark(fn){
  Array(limit).fill(modes[mode]).forEach(x => fn(x))  
}

const test = [
  {
    label : 'Rambda',
    fn    : () => {
      applyBenchmark(R.type)
      // R.type(new String('I am a String object'))
      // R.type(fn1)
      // R.type(fn2)
      // R.type(fn3)
      // R.type(1)
      // R.type({ a : 1 })
      // R.type(null)
      // R.type(undefined)
      // R.type(Number('foo'))
      // R.type([ 12, 3 ])
      // R.type(/\s/g)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      applyBenchmark(Ramda.type)
      // Ramda.type(new String('I am a String object'))
      // Ramda.type(fn1)
      // Ramda.type(fn2)
      // Ramda.type(fn3)
      // Ramda.type(1)
      // Ramda.type({ a : 1 })
      // Ramda.type(null)
      // Ramda.type(undefined)
      // Ramda.type(Number('foo'))
      // Ramda.type([ 12, 3 ])
      // Ramda.type(/\s/g)
    },
  },
]

module.exports = test
