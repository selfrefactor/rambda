export function repeat(x, num) {
  if (arguments.length === 1) {
    return numHolder => repeat(x, numHolder)
  }
  const willReturn = Array(num)

  return willReturn.fill(x)
}
