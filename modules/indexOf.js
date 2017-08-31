const curry = require('./internal/curry')

function indexOf (x, arr) {
  let index = -1
  const length = arr.length

  while (++index < length) {
    if (arr[ index ] === x) {
      return index
    }
  }

  return -1
}

module.exports = curry(indexOf)
