function prepend(val, arr) {
  if (arr === undefined) {
    return holder => prepend(val, holder)
  }

  const clone = arr.concat()
  clone.unshift(val)

  return clone
}

module.exports = prepend
