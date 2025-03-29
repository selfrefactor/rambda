export function dropLast(numberItems) {
  return list => (numberItems > 0 ? list.slice(0, -numberItems) : list.slice())
}
