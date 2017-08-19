const curry = require("./internal/curry")

function indexOf(question, arr) {
  let index = -1
  const length = arr.length

  while (++index < length) {
    if (arr[ index ] === question) {
      return index
    }
  }

  return -1
}

module.exports = curry(indexOf)
