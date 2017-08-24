const curry = require('./internal/curry')

function repeat (a, num) {
  const willReturn = Array(num)

  return willReturn.fill(a)
}

module.exports = curry(repeat)
