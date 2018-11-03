export function both(x, y) {
  if (arguments.length === 1) {
    return yHolder => both(x, yHolder)
  }

  return input => x(input) && y(input)
}
