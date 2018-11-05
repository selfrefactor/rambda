export function startsWith(x, y) {
  if (arguments.length === 1)
    return yHolder => startsWith(x, yHolder)

  return y.startsWith(x)
}
