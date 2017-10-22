
export default function multiply (x, y) {
  if (y === undefined) {
    return yHolder => multiply(x, yHolder)
  }

  return x * y
}
