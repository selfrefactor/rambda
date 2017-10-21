export default function both (x, y) {
  if (y === undefined) {
    return yHolder => both(x, yHolder)
  }

  return input => x(input) && y(input)
}
