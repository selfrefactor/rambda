export default function either (x, y) {
  if (y === undefined) {
    return yHolder => either(x, yHolder)
  }

  return input => x(input) || y(input)
}
