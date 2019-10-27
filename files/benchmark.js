process.env.BENCHMARK_FOLDER = 'files/benchmark_results'
const _ = require('lodash')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const T = require('../src/internal/tryOuts.js')
const { createBenchmark } = require('helpers')
// const { headObject } = require('rambdax')

const add = [
  {
    label : 'Rambda',
    fn    : () => {
      R.add(1, 1)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.add(1, 1)
    },
  },
  {
    label : 'Lodash',
    fn    : () => {
      _.add(1, 1)
    },
  },
]

const adjust = [
  {
    label : 'Rambda',
    fn    : () => {
      R.adjust(val => val + 1, 0)
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.adjust(val => val + 1, 0)
    },
  },
]

const any = [
  {
    label : 'Rambda',
    fn    : () => {
      R.any(val => val > 2, [ 1, 2, 3, 4 ])
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.any(val => val > 2, [ 1, 2, 3, 4 ])
    },
  },
  {
    label : 'Lodash.some',
    fn    : () => {
      _.some([ 1, 2, 3, 4 ], val => val > 2)
    },
  },
]

const append = [
  {
    label : 'Rambda',
    fn    : () => {
      R.append(0)([ 1, 2, 3, 4 ])
      R.append('bar')('foo')
    },
  },
  {
    label : 'Ramda',
    fn    : () => {
      Ramda.append(0)([ 1, 2, 3, 4 ])
      Ramda.append('bar')('foo')
    },
  },
]

const foo = [
  {
    label : 'Rambda',
    fn    : () => {

    },
  },
  {
    label : 'Ramda',
    fn    : () => {

    },
  },
  {
    label : 'Lodash',
    fn    : () => {

    },
  },
]
console.log(R.isNumberB)
const isNumber = [
  {
    label : 'b',
    fn    : () => {
      T.isNumberB(new Error('XXX'))
    },
  },
  {
    label : 'c',
    fn    : () => {
      T.isNumberC(new Error('XXX'))
    },
  },
]

const methodsToBenchmark = [
  // { add },
  // { adjust },
  // { any },
  // { append },
  { isNumber },
]

methodsToBenchmark.forEach(singleMethod => {
  createBenchmark(singleMethod)
})
