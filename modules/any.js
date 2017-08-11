const curryTwo = require("./internal/curryTwo")

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

module.exports = curryTwo(any)
