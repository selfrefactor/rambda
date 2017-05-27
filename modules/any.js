function any(fn, arr){
  if (arr === undefined) {
    return holder => any(fn, holder)
  }

  let counter = 0
  while (counter < arr.length) {
    if (fn(arr[ counter ])) {
      return true
    }
    counter++
  }

  return false
}

module.exports = any
