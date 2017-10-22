export default function divide (x, y) {
  if (y === undefined) {
    return yHolder => divide(x, yHolder)
  }

  return x / y
}
