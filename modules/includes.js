export default function includes (x, y) {
  if (y === undefined) {
    return yHolder => includes(x, yHolder)
  }

  return y.includes(x)
}
