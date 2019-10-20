process.env.BENCHMARK_FOLDER = 'files/benchmark_results'
const _ = require('lodash')
const Ramda = require('ramda')
const R = require('../dist/rambda.js')
const {createBenchmark} = require('helpers')

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

createBenchmark({add})