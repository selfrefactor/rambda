export default function indexOf (x, arr) {
  if (arr === undefined) {
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
