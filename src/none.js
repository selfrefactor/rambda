export function none(fn, arr) {
  if (arguments.length === 1)
    return arrHolder => none(fn, arrHolder)

  return arr.filter(fn).length === 0
}
