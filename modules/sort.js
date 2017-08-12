const curryTwo = require("./internal/curryTwo")

function sort(fn, arr) {
  const arrClone = arr.concat()

  return arrClone.sort(fn)
}

module.exports = curryTwo(sort)
