
export default function repeat (x, num) {
  if (num === undefined) {
    return numHolder => repeat(x, numHolder)
  }
  const willReturn = Array(num)

  return willReturn.fill(x)
}
