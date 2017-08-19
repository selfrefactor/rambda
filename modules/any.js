const curry = require("./internal/curry")

function any(fn, arr){

  let counter = 0
  while (counter < arr.length) {
    if (fn(arr[ counter ])) {
      return true
    }
    counter++
  }

  return false
}

module.exports = curry(any)
