export function minBy(compareFn, x) {
  return y => (compareFn(y) < compareFn(x) ? y : x)
}
