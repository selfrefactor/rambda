export default function endsWith (x, y) {
  if (y === undefined) {
    return yHolder => endsWith(x, yHolder)
  }

  return y.endsWith(x)
}
