export function maxBy(compareFn, x) {
  return y => (compareFn(y) > compareFn(x) ? y : x)
}
