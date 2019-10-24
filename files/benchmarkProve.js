process.env.BENCHMARK_FOLDER = 'files/benchmark_results'
const { createBenchmark } = require('helpers')

const origin = [ 1, 2, 3, {
  a : 1,
  b : 'foo',
}, new RegExp('bar'), 7 ]
const target = 7

const findInArray = [
  {
    label : 'index.of',
    fn    : () => {
      const a = origin.indexOf(target) > -1
    },
  },
  {
    label : 'includes',
    fn    : () => {
      const a = origin.includes(target)
    },
  },
  {
    label : 'find',
    fn    : () => {
      const a = origin.find(x => x === target) !== undefined
    },
  },
]

const cloneArray = [
  {
    label : 'concat',
    fn    : () => {
      const a = origin.concat()
    },
  },
  {
    label : 'rest',
    fn    : () => {
      const a = [ ...origin ]
    },
  },
  {
    label : 'slice',
    fn    : () => {
      const a = origin.slice()
    },
  },
  {
    label : 'slice.with.zero',
    fn    : () => {
      const a = origin.slice(0)
    },
  },
]

// createBenchmark({ findInArray })
createBenchmark({ cloneArray })
