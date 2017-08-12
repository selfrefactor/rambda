const curryTwo = require("./internal/curryTwo")

function prepend(val, arr) {
  const clone = arr.concat()
  clone.unshift(val)

  return clone
}

module.exports = curryTwo(prepend)
