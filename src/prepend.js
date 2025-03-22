export function prepend(x) {
  return list => [x].concat(list)
}
