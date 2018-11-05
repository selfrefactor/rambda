export function multiply(x, y) {
  if (arguments.length === 1)
    return yHolder => multiply(x, yHolder)

  return x * y
}
