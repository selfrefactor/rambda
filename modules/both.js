const curry = require("./internal/curryTwo")

function both (x, y) {
  return input => x(input) && y(input)
}

module.exports = curry(both)
