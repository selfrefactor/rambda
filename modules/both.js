const curry = require("./internal/curry")

function both (x, y) {
  return input => x(input) && y(input)
}

module.exports = curry(both)
