function reduce(fn, initialValue, arr) {
  if (arr === undefined) {
    return holder => reduce(fn, initialValue, holder)
  }

  return arr.reduce(fn, initialValue)
}

module.exports = reduce 
