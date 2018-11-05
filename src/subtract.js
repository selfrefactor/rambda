export function subtract(x, y) {
  if (arguments.length === 1)
    return yHolder => subtract(x, yHolder)

  return x - y
}
