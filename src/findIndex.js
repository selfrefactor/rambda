export function findIndex(fn, arr) {
  if (arguments.length === 1) {
    return arrHolder => findIndex(fn, arrHolder)
  }

  const len = arr.length
  let index = -1

  while (++index < len) {
    if (fn(arr[ index ], index)) {
      return index
    }
  }

  return -1
}
