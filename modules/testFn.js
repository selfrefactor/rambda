const curry = require('./internal/curry')

function test (regex, str) {
  return str.search(regex) !== -1
}

module.exports = curry(test)
