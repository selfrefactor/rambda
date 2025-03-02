export function flatMap(fn) {
  return list => [].concat(...list.map(fn))
}
