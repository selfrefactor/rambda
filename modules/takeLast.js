const baseSlice = require("./internal/baseSlice")
const curryTwo = require("./internal/curryTwo")

function takeLast(takeNumber, a) {
  const len = a.length
  takeNumber = takeNumber > len ?
    len :
    takeNumber

  if (typeof a === "string") {
    return a.slice(len - takeNumber)
  }
  takeNumber = len - takeNumber

  return baseSlice(a, takeNumber, len)
}

module.exports = curryTwo(takeLast)
