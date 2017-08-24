const curryThree = require('./internal/curryThree')

function propEq (key, val, obj) {
  return obj[ key ] === val
}

module.exports = curryThree(propEq)
