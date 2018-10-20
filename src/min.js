export function min(x, y) {
  if (arguments.length === 1) {
    return yHolder => min(x, yHolder)
  }

  return y < x ? y : x
}
