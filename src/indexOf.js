export function indexOf(x, arr) {
  if (arguments.length === 1) {
    return arrHolder => indexOf(x, arrHolder)
  }

  let index = -1
  const length = arr.length

  while (++index < length) {
    if (arr[ index ] === x) {
      return index
    }
  }

  return -1
}
