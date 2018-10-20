export function modulo(x, y) {
  if (arguments.length === 1) return yHolder => modulo(x, yHolder)

  return x % y
}
