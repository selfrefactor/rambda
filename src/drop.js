export function drop(dropNumber, x) {
  if (arguments.length === 1) {
    return xHolder => drop(dropNumber, xHolder)
  }

  return x.slice(dropNumber)
}
