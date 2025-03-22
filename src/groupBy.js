export function groupBy(groupFn) {
  return iterable => Object.groupBy(iterable,groupFn)
}
