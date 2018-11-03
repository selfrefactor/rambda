export function either(x, y) {
  if (arguments.length === 1) {
    return yHolder => either(x, yHolder)
  }

  return input => x(input) || y(input)
}
