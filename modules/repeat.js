function repeat(a, num) {
  if (num === undefined) {
    return holder => repeat(a, holder)
  }
  const willReturn = Array(num)

  return willReturn.fill(a)
}

module.exports = repeat
