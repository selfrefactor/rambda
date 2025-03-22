export function concat(x) {
  return y => (typeof x === 'string' ? `${x}${y}` : [...x, ...y])
}
