export function sortingFn(fn) {
  return (a, b) => (fn(a, b) ? -1 : fn(b, a) ? 1 : 0)
}
