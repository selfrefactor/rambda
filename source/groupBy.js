export function groupBy(groupFn) {
  return list => Object.groupBy(list,groupFn)
}
