export function dropLast(dropNumber, x) {
  if (arguments.length === 1) {
    return xHolder => dropLast(dropNumber, xHolder)
  }

  return x.slice(0, -dropNumber)
}
