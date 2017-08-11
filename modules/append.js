const curryTwo = require("./internal/curryTwo")

function append (val, arr) {
  const clone = arr.concat()
  clone.push(val)

  return clone
}

module.exports = curryTwo(append)
