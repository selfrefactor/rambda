
export default function subtract (x, y) {
  if (y === undefined) {
    return yHolder => subtract(x, yHolder)
  }

  return x - y
}
