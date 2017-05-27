function map(fn, arr) {
  if (arr === undefined) {
    return holder => map(fn, holder)
  }

  let index = -1
  const length = arr.length
  const willReturn = Array(length)

  while (++index < length) {
    willReturn[ index ] = fn(arr[ index ])
  }

  return willReturn
}

module.exports = map
