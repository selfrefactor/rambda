const curryTwo = require("./internal/curryTwo")

function findIndex(fn, arr){
  const length = arr.length
  let index = -1

  while (++index < length) {
    if (fn(arr[ index ])) {
      return index
    }
  }

  return -1
}

module.exports = curryTwo(findIndex)
