const curry = require("./internal/curryTwo")

function either (x, y) {
  return input => x(input) || y(input)
}

module.exports = curry(either)
