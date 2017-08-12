const curryTwo = require("./internal/curryTwo")

function repeat(a, num) {
  const willReturn = Array(num)

  return willReturn.fill(a)
}

module.exports = curryTwo(repeat)
