export default function modulo (x, y) {
  if (y === undefined) {
    return yHolder => modulo(x, yHolder)
  }

  return x % y
}
