export default function dropLast (dropNumber, x) {
  if (x === undefined) {
    return xHolder => dropLast(dropNumber, xHolder)
  }

  return x.slice(0, -dropNumber)
}
