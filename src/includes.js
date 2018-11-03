export function includes(x, y) {
  if (arguments.length === 1) {
    return yHolder => includes(x, yHolder)
  }

  return y.includes(x)
}
