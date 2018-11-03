export function divide(x, y) {
  if (arguments.length === 1) {
    return yHolder => divide(x, yHolder)
  }

  return x / y
}
