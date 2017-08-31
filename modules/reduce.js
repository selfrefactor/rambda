import curryThree from './internal/curryThree'

function reduce (fn, initialValue, arr) {
  return arr.reduce(fn, initialValue)
}

export default curryThree(reduce)
