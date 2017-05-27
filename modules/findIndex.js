function findIndex(fn, arr){
  if (arr === undefined) {
    return holder => findIndex(fn, holder)
  }

  const length = arr.length
  let index = -1

  while (++index < length) {
    if (fn(arr[ index ])) {
      return index
    }
  }

  return -1
}

module.exports = findIndex
