export function sort(fn, arr) {
  if (arguments.length === 1)
    return arrHolder => sort(fn, arrHolder)

  const arrClone = arr.concat()

  return arrClone.sort(fn)
}
