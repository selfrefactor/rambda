const curry = require("./internal/curry")

function either (x, y) {
  return input => x(input) || y(input)
}

module.exports = curry(either)
