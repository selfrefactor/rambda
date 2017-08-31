const __ = require('../__')

function curry (fn) {
  return (x, y) => {
    if (y === undefined) {
      return yHolder => fn(x, yHolder)
    }
    if (x === __) {
      return xHolder => fn(xHolder, y)
    }

    return fn(x, y)
  }
}

module.exports = curry
