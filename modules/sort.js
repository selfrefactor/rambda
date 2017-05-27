function sort(fn, arr) {
  if (arr === undefined) {
    return holder => sort(fn, holder)
  }
  const arrClone = arr.concat()

  return arrClone.sort(fn)
}

module.exports = sort
