const curryTwo = require("./internal/curryTwo")

function map(fn, arr) {
  let index = -1
  const length = arr.length
  const willReturn = Array(length)

  while (++index < length) {
    willReturn[ index ] = fn(arr[ index ])
  }

  return willReturn
}

module.exports = curryTwo(map)
