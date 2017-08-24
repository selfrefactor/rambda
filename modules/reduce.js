const curryThree = require('./internal/curryThree')

function reduce (fn, initialValue, arr) {
  return arr.reduce(fn, initialValue)
}

module.exports = curryThree(reduce)
