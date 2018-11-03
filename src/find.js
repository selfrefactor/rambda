export function find(fn, arr) {
  if (arguments.length === 1) {
    return arrHolder => find(fn, arrHolder)
  }

  return arr.find(fn)
}
