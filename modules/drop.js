export default function drop (dropNumber, x) {
  if (x === undefined) {
    return xHolder => drop(dropNumber, xHolder)
  }

  return x.slice(dropNumber)
}
