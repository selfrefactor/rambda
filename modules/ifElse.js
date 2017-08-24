const curryThree = require('./internal/curryThree')

function ifElse (conditionFn, ifFn, elseFn) {
  return input => {
    if (conditionFn(input) === true) {
      return ifFn(input)
    }

    return elseFn(input)
  }
}

module.exports = curryThree(ifElse)
