export function sort(sortFn) {
  return list => list.toSorted(sortFn)
}
