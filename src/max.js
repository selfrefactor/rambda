export function max(x, y) {
  if (arguments.length === 1) {
    return yHolder => max(x, yHolder)
  }

  return y > x ? y : x
}
