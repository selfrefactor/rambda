export default function startsWith (x, y) {
  if (y === undefined) {
    return yHolder => startsWith(x, yHolder)
  }

  return y.startsWith(x)
}
