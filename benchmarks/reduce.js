const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.cjs')
const Ramda = require('ramda')

const fn = (acc, value) => acc + value
const holder = [ 1, 2, 3 ]
const acc = ''

const suite = new Benchmark.Suite()

suite.add('Rambda#reduce', () => {
  R.reduce(fn, acc, holder)
})
  .add('Ramda', () => {
    Ramda.reduce(fn, acc, holder)
  })
  .add('Lodash', () => {
    _.reduce(holder, fn, acc)
  })
module.exports = suite
